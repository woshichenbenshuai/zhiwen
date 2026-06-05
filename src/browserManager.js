import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { nanoid } from 'nanoid';
import { buildFingerprintInitScript, createRandomFingerprint } from './fingerprint.js';

const DEFAULT_START_URL = process.env.DEFAULT_START_URL || 'about:blank';

export class BrowserManager {
  constructor({ dataDir, defaultExtensionPath }) {
    this.dataDir = dataDir;
    this.defaultExtensionPath = defaultExtensionPath;
    this.sessions = new Map();
  }

  async listSessions() {
    return Array.from(this.sessions.values()).map((session) => session.publicInfo());
  }

  async createSession(options = {}) {
    const id = options.id || nanoid(12);
    if (this.sessions.has(id)) {
      throw new Error(`session already exists: ${id}`);
    }

    const profileDir = path.join(this.dataDir, 'profiles', id);
    await fs.mkdir(profileDir, { recursive: true });

    const fingerprint = createRandomFingerprint(options.fingerprint);
    const extensionPath = options.extensionPath || this.defaultExtensionPath;
    const args = buildChromiumArgs({ extensionPath, fingerprint, extraArgs: options.args });

    const context = await chromium.launchPersistentContext(profileDir, {
      headless: false,
      channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
      viewport: fingerprint.viewport,
      locale: fingerprint.locale,
      timezoneId: fingerprint.timezoneId,
      colorScheme: fingerprint.colorScheme,
      deviceScaleFactor: fingerprint.deviceScaleFactor,
      userAgent: fingerprint.userAgent,
      proxy: normalizeProxy(options.proxy),
      args,
      ignoreDefaultArgs: ['--enable-automation'],
    });

    await context.addInitScript(buildFingerprintInitScript(fingerprint));

    const page = context.pages()[0] || await context.newPage();
    const startUrl = options.startUrl || DEFAULT_START_URL;
    if (startUrl !== 'about:blank') {
      await page.goto(startUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    }

    const session = new BrowserSession({
      id,
      context,
      page,
      profileDir,
      fingerprint,
      proxy: options.proxy || null,
      extensionPath,
      createdAt: new Date().toISOString(),
    });

    context.on('close', () => {
      this.sessions.delete(id);
    });

    this.sessions.set(id, session);
    return session.publicInfo();
  }

  getSession(id) {
    const session = this.sessions.get(id);
    if (!session) {
      throw new Error(`session not found: ${id}`);
    }
    return session;
  }

  async closeSession(id) {
    const session = this.getSession(id);
    await session.close();
    this.sessions.delete(id);
    return { ok: true, id };
  }
}

class BrowserSession {
  constructor({ id, context, page, profileDir, fingerprint, proxy, extensionPath, createdAt }) {
    this.id = id;
    this.context = context;
    this.page = page;
    this.profileDir = profileDir;
    this.fingerprint = fingerprint;
    this.proxy = proxy;
    this.extensionPath = extensionPath;
    this.createdAt = createdAt;
  }

  publicInfo() {
    return {
      id: this.id,
      profileDir: this.profileDir,
      fingerprint: this.fingerprint,
      proxy: this.proxy,
      extensionPath: this.extensionPath,
      createdAt: this.createdAt,
      vncUrl: process.env.PUBLIC_VNC_URL || 'http://localhost:7900',
    };
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    return { ok: true, id: this.id, url: this.page.url() };
  }

  async search({ engine = 'google', keyword }) {
    const searchUrl = buildSearchUrl(engine, keyword);
    await this.page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await this.page.waitForTimeout(1500);
    return {
      ok: true,
      id: this.id,
      url: this.page.url(),
      title: await this.page.title(),
      results: await extractSearchResults(this.page),
    };
  }

  async close() {
    await this.context.close();
  }
}

function buildChromiumArgs({ extensionPath, fingerprint, extraArgs = [] }) {
  const args = [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-blink-features=AutomationControlled',
    `--lang=${fingerprint.locale}`,
    `--window-size=${fingerprint.viewport.width},${fingerprint.viewport.height}`,
  ];

  if (extensionPath) {
    args.push(`--disable-extensions-except=${extensionPath}`);
    args.push(`--load-extension=${extensionPath}`);
  }

  return args.concat(extraArgs);
}

function normalizeProxy(proxy) {
  if (!proxy) {
    return undefined;
  }

  if (typeof proxy === 'string') {
    return { server: proxy };
  }

  return proxy;
}

function buildSearchUrl(engine, keyword) {
  const q = encodeURIComponent(keyword);
  if (engine === 'bing') {
    return `https://www.bing.com/search?q=${q}`;
  }
  if (engine === 'duckduckgo') {
    return `https://duckduckgo.com/?q=${q}`;
  }
  return `https://www.google.com/search?q=${q}`;
}

async function extractSearchResults(page) {
  return page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a'));
    return anchors
      .map((anchor) => ({
        text: (anchor.textContent || '').replace(/\s+/g, ' ').trim(),
        href: anchor.href,
      }))
      .filter((item) => item.text && /^https?:\/\//.test(item.href))
      .slice(0, 20);
  });
}
