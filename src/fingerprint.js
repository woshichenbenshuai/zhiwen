const WINDOWS_UA = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
];

const LINUX_UA = [
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
];

const VIEWPORTS = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1536, height: 864 },
  { width: 1600, height: 900 },
  { width: 1920, height: 1080 },
];

const LOCALES = ['en-US', 'en-GB', 'ja-JP', 'zh-CN', 'zh-TW'];
const TIMEZONES = ['America/Los_Angeles', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Asia/Shanghai'];

export function createRandomFingerprint(overrides = {}) {
  const platform = pick(['Win32', 'Linux x86_64']);
  const userAgent = platform === 'Win32' ? pick(WINDOWS_UA) : pick(LINUX_UA);
  const viewport = pick(VIEWPORTS);
  const locale = pick(LOCALES);
  const timezoneId = pick(TIMEZONES);

  return {
    platform,
    userAgent,
    viewport,
    locale,
    timezoneId,
    colorScheme: pick(['light', 'dark']),
    deviceScaleFactor: pick([1, 1.25, 1.5, 2]),
    hardwareConcurrency: pick([4, 6, 8, 12, 16]),
    deviceMemory: pick([4, 8, 16]),
    ...overrides,
  };
}

export function buildFingerprintInitScript(fingerprint) {
  return `
(() => {
  const defineGetter = (target, key, value) => {
    try {
      Object.defineProperty(target, key, { get: () => value, configurable: true });
    } catch {}
  };

  defineGetter(Navigator.prototype, 'platform', ${JSON.stringify(fingerprint.platform)});
  defineGetter(Navigator.prototype, 'hardwareConcurrency', ${JSON.stringify(fingerprint.hardwareConcurrency)});
  defineGetter(Navigator.prototype, 'deviceMemory', ${JSON.stringify(fingerprint.deviceMemory)});
  defineGetter(Navigator.prototype, 'webdriver', undefined);

  const originalQuery = window.navigator.permissions?.query?.bind(window.navigator.permissions);
  if (originalQuery) {
    window.navigator.permissions.query = (parameters) => (
      parameters?.name === 'notifications'
        ? Promise.resolve({ state: Notification.permission })
        : originalQuery(parameters)
    );
  }

  const noise = Math.random() * 0.000001;
  const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
  WebGLRenderingContext.prototype.getParameter = function(parameter) {
    if (parameter === 37445) return 'Google Inc.';
    if (parameter === 37446) return 'ANGLE (Intel, Intel(R) UHD Graphics Direct3D11 vs_5_0 ps_5_0)';
    return originalGetParameter.call(this, parameter);
  };

  const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
  HTMLCanvasElement.prototype.toDataURL = function(...args) {
    const context = this.getContext('2d');
    if (context) {
      const imageData = context.getImageData(0, 0, Math.min(this.width, 1), Math.min(this.height, 1));
      if (imageData.data.length) imageData.data[0] = imageData.data[0] + noise;
      context.putImageData(imageData, 0, 0);
    }
    return originalToDataURL.apply(this, args);
  };
})();
`;
}

function pick(values) {
  return values[Math.floor(Math.random() * values.length)];
}
