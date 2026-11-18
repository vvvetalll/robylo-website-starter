// Batch adapter for the approved Chicago Mounting v3 HTML. No new geometry.
// Requires the same pre-existing Playwright, sharp, Node and Chrome runtime.
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const assert = require('node:assert/strict');
const out = path.resolve(__dirname, '..');
const reference = path.resolve(out, '../2026-11-18-studio-plate-chicago-mounting/v3');
const browserPath = process.env.CHROME_PATH || (process.platform === 'win32'
  ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : '/usr/bin/google-chrome');

(async () => {
  const projects = JSON.parse(await fs.readFile(path.join(__dirname, 'projects.json'), 'utf8'));
  const template = await fs.readFile(path.join(reference, 'source/plate.html'), 'utf8');
  const browser = await chromium.launch({ executablePath: browserPath, headless: true });
  const report = { date: '2026-11-18', reference: 'Chicago Mounting v3 at dac1883', browser: browser.version(), exports: [] };
  try {
    for (const project of projects) {
      const html = template.replaceAll('Chicago Mounting', project.name)
        .replace('../../source/captures/chicago-mounting-desktop-1420.png', pathToFileURL(path.join(__dirname, `captures/${project.slug}-desktop.png`)).href)
        .replace('../../source/captures/chicago-mounting-mobile-480.png', pathToFileURL(path.join(__dirname, `captures/${project.slug}-mobile.png`)).href);
      for (const [suffix, width, height] of [['', 1600, 1200], ['-mobile', 1000, 1250]]) {
        const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
        await page.goto(pathToFileURL(path.join(reference, 'source/plate.html')).href);
        await page.setContent(html);
        await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); });
        const geometry = await page.evaluate(() => {
          const r = s => { const x = document.querySelector(s).getBoundingClientRect(); return { x: x.x, y: x.y, width: x.width, height: x.height, right: x.right, bottom: x.bottom }; };
          return { desktop: r('.desktop'), phone: r('.phone') };
        });
        assert(geometry.phone.bottom + 10 < height && geometry.phone.right + 10 < width);
        const name = `robylo-work-${project.slug}-plate-v3${suffix}`;
        const png = path.join(out, `${name}.png`);
        await page.locator('.plate').screenshot({ path: png });
        await sharp(png).webp({ quality: 90, effort: 6, smartSubsample: false }).toFile(path.join(out, `${name}.webp`));
        if (!suffix) await sharp(png).resize(800, 600).webp({ quality: 90, effort: 6, smartSubsample: false }).toFile(path.join(out, `${name}-800.webp`));
        report.exports.push({ project: project.slug, name, width, height, bytes: (await fs.stat(path.join(out, `${name}.webp`))).size, ...geometry });
        await page.close();
      }
    }
  } finally { await browser.close(); }
  const all = [{ slug: 'chicago-mounting', name: 'Chicago Mounting', folder: reference }, ...projects.map(p => ({ ...p, folder: out }))];
  for (const mobile of [false, true]) {
    const w = mobile ? 280 : 400;
    const h = mobile ? 350 : 300;
    const composite = [];
    for (let i = 0; i < all.length; i++) {
      const p = all[i];
      const bytes = await sharp(path.join(p.folder, `robylo-work-${p.slug}-plate-v3${mobile ? '-mobile' : ''}.webp`)).resize(w, h).png().toBuffer();
      composite.push({ input: bytes, left: i * w, top: 56 });
      const label = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="56"><rect width="100%" height="100%" fill="white"/><text x="12" y="33" font-family="Arial,sans-serif" font-size="${mobile ? 15 : 18}">${p.name}</text></svg>`);
      composite.push({ input: label, left: i * w, top: 0 });
    }
    await sharp({ create: { width: w * 5, height: h + 56, channels: 3, background: '#fff' } }).composite(composite).png().toFile(path.join(out, `all-five-${mobile ? 'mobile' : 'desktop'}-plates.png`));
  }
  await fs.writeFile(path.join(out, 'render-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report.exports.map(e => ({ name: e.name, bytes: e.bytes }))));
})().catch(error => { console.error(error); process.exitCode = 1; });
