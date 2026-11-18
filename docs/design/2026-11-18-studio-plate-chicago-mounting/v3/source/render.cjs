/* Design evidence only. Requires existing Playwright, sharp and Chrome.
 * Run from any directory: node path/to/v3/source/render.cjs
 * Set NODE_PATH if using a shared runtime; CHROME_PATH can select a browser.
 * No site requests: all inputs are committed local files. */
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const assert = require('node:assert/strict');

const output = path.resolve(__dirname, '..');
const original = path.resolve(output, '..');
const url = name => pathToFileURL(path.join(__dirname, name)).href;
const plateName = 'robylo-work-chicago-mounting-plate-v3';
const browserPath = process.env.CHROME_PATH || (process.platform === 'win32'
  ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : '/usr/bin/google-chrome');

async function ready(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  // Match the v2 pipeline's settling period after local image/font decoding.
  // Chrome can otherwise capture an intermediate downsample of a picture source.
  await page.waitForTimeout(400);
}

async function comparison(left, right, width, target, subtitle) {
  const a = await sharp(left).resize({ width }).png().toBuffer();
  const b = await sharp(right).resize({ width }).png().toBuffer();
  const [am, bm] = await Promise.all([sharp(a).metadata(), sharp(b).metadata()]);
  const height = Math.max(am.height, bm.height);
  const header = Buffer.from(`<svg width="${width * 2}" height="56" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white"/><g font-family="Arial,sans-serif" font-size="18" fill="black"><text x="20" y="34">v2 · ${subtitle}</text><text x="${width + 20}" y="34">v3 · ${subtitle}</text></g><path d="M${width} 0V56" stroke="#d6d6d6"/></svg>`);
  await sharp({ create: { width: width * 2, height: height + 56, channels: 3, background: '#fff' } })
    .composite([{ input: header, top: 0, left: 0 }, { input: a, top: 56, left: 0 }, { input: b, top: 56, left: width }])
    .png().toFile(path.join(output, target));
}

(async () => {
  const browser = await chromium.launch({ executablePath: browserPath, headless: true });
  const report = { date: '2026-11-18', browser: browser.version(), rendering: [], exports: [] };
  try {
    for (const [suffix, width, height] of [['', 1600, 1200], ['-mobile', 1000, 1250]]) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
      await page.goto(url('plate.html')); await ready(page);
      const geometry = await page.evaluate(() => {
        const rect = selector => { const r = document.querySelector(selector).getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; };
        return { plate: rect('.plate'), desktop: rect('.desktop'), phone: rect('.phone') };
      });
      assert(geometry.phone.bottom + 10 < height, 'Entire phone and separation ring must fit');
      assert(geometry.phone.right + 10 < width, 'Phone must have a right margin');
      assert(geometry.desktop.right < width, 'Complete desktop width must fit');
      const png = path.join(output, `${plateName}${suffix}.png`);
      await page.locator('.plate').screenshot({ path: png });
      await sharp(png).webp({ quality: 90, effort: 6, smartSubsample: false }).toFile(path.join(output, `${plateName}${suffix}.webp`));
      report.rendering.push({ name: `plate${suffix}`, viewport: [width, height], ...geometry });
      await page.close();
    }
    await sharp(path.join(output, `${plateName}.png`)).resize(800, 600)
      .webp({ quality: 90, effort: 6, smartSubsample: false }).toFile(path.join(output, `${plateName}-800.webp`));

    for (const [name, width, height] of [['desktop-1440', 1440, 900], ['tablet-1024', 1024, 900], ['tablet-768', 768, 900], ['mobile-390', 390, 844], ['mobile-320', 320, 844]]) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('requestfailed', r => errors.push(r.url()));
      page.on('request', request => assert(request.url().startsWith('file:'), 'No external requests allowed'));
      await page.goto(url('carousel-preview.html')); await ready(page);
      const metrics = await page.evaluate(() => {
        const r = document.querySelector('.card .img').getBoundingClientRect();
        const im = document.querySelector('.img img');
        return { scrollWidth: document.documentElement.scrollWidth, card: [r.x, r.y, r.width, r.height], manrope: document.fonts.check('700 30px Manrope'), image: im.currentSrc.split('/').pop(), imagesLoaded: [...document.images].every(i => i.complete && i.naturalWidth > 0) };
      });
      assert.equal(metrics.scrollWidth, width); assert(metrics.manrope); assert(metrics.imagesLoaded); assert.equal(errors.length, 0);
      assert.equal(metrics.image, `${plateName}${width < 768 ? '-mobile' : ''}.webp`);
      await page.screenshot({ path: path.join(output, `carousel-v3-${name}.png`), fullPage: true });
      report.rendering.push({ name, viewport: [width, height], deviceScaleFactor: 2, ...metrics, errors });
      await page.close();
    }
  } finally { await browser.close(); }
  await comparison(path.join(original, 'source/robylo-work-chicago-mounting-plate.png'), path.join(output, `${plateName}.png`), 800, 'comparison-v2-v3-plate.png', 'Studio Plate');
  await comparison(path.join(original, '2026-11-18-studio-plate-carousel-desktop-1440.png'), path.join(output, 'carousel-v3-desktop-1440.png'), 720, 'comparison-v2-v3-desktop.png', '1440 viewport');
  await comparison(path.join(original, '2026-11-18-studio-plate-carousel-mobile-390.png'), path.join(output, 'carousel-v3-mobile-390.png'), 390, 'comparison-v2-v3-mobile.png', '390 viewport');
  for (const name of (await fs.readdir(output)).filter(f => /\.(png|webp)$/.test(f))) {
    const metadata = await sharp(path.join(output, name)).metadata();
    report.exports.push({ name, width: metadata.width, height: metadata.height, bytes: (await fs.stat(path.join(output, name))).size });
  }
  await fs.writeFile(path.join(output, 'render-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
