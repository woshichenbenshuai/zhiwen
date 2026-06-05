import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { z } from 'zod';
import { BrowserManager } from './browserManager.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dataDir = process.env.DATA_DIR || path.join(rootDir, 'data');
const defaultExtensionPath = process.env.EXTENSION_PATH || path.join(rootDir, 'extension');
const port = Number(process.env.PORT || 17003);
const apiToken = process.env.API_TOKEN || '';

const app = express();
const manager = new BrowserManager({ dataDir, defaultExtensionPath });

app.use(express.json({ limit: '1mb' }));
app.use(authMiddleware);

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/sessions', async (_req, res, next) => {
  try {
    res.json({ ok: true, sessions: await manager.listSessions() });
  } catch (error) {
    next(error);
  }
});

app.post('/sessions', async (req, res, next) => {
  try {
    const body = createSessionSchema.parse(req.body);
    const session = await manager.createSession(body);
    res.status(201).json({ ok: true, session });
  } catch (error) {
    next(error);
  }
});

app.post('/sessions/:id/goto', async (req, res, next) => {
  try {
    const { url } = gotoSchema.parse(req.body);
    res.json(await manager.getSession(req.params.id).goto(url));
  } catch (error) {
    next(error);
  }
});

app.post('/sessions/:id/search', async (req, res, next) => {
  try {
    const body = searchSchema.parse(req.body);
    res.json(await manager.getSession(req.params.id).search(body));
  } catch (error) {
    next(error);
  }
});

app.delete('/sessions/:id', async (req, res, next) => {
  try {
    res.json(await manager.closeSession(req.params.id));
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  const status = error instanceof z.ZodError ? 400 : 500;
  res.status(status).json({
    ok: false,
    error: error instanceof z.ZodError ? error.flatten() : String(error?.message || error),
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`zhiwen browser control listening on 0.0.0.0:${port}`);
  console.log(`default extension path: ${defaultExtensionPath}`);
  if (process.env.AUTOSTART_SESSION === 'true') {
    void autostartSession();
  }
});

const proxySchema = z.union([
  z.string().min(1),
  z.object({
    server: z.string().min(1),
    username: z.string().optional(),
    password: z.string().optional(),
  }),
]).optional();

const createSessionSchema = z.object({
  id: z.string().min(1).optional(),
  proxy: proxySchema,
  startUrl: z.string().min(1).optional(),
  extensionPath: z.string().min(1).optional(),
  args: z.array(z.string()).optional(),
  fingerprint: z.record(z.unknown()).optional(),
});

const gotoSchema = z.object({
  url: z.string().url(),
});

const searchSchema = z.object({
  keyword: z.string().min(1),
  engine: z.enum(['google', 'bing', 'duckduckgo']).optional(),
});

function authMiddleware(req, res, next) {
  if (!apiToken || req.path === '/health') {
    next();
    return;
  }

  const header = req.get('authorization') || '';
  if (header === `Bearer ${apiToken}`) {
    next();
    return;
  }

  res.status(401).json({ ok: false, error: 'unauthorized' });
}

async function autostartSession() {
  try {
    const session = await manager.createSession({
      id: process.env.AUTOSTART_SESSION_ID || 'default',
      proxy: process.env.AUTOSTART_PROXY || undefined,
      startUrl: process.env.AUTOSTART_URL || 'about:blank',
    });
    console.log(`autostart browser session ready: ${session.id}`);
  } catch (error) {
    console.error(`autostart browser session failed: ${String(error?.message || error)}`);
  }
}
