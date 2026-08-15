const { chromium } = require('playwright');
const todo = require('./todo.json');
(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  for (const [route, slug, tag] of todo) {
    const [w, h] = tag === 'desktop' ? [1440, 900] : [390, 844];
    const p = await b.newPage({ viewport: { width: w, height: h } });
    try {
      await p.goto(`http://localhost:4173${route}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await p.evaluate(async () => {
        await new Promise(r => {
          let y = 0;
          const step = () => {
            window.scrollTo(0, y); y += 900;
            if (y < document.body.scrollHeight && y < 12000) setTimeout(step, 45);
            else { window.scrollTo(0, 0); setTimeout(r, 400); }
          };
          step();
        });
      });
      await p.waitForTimeout(500);
      await p.screenshot({ path: `pageshots/${slug}-${tag}.jpg`, fullPage: tag === 'desktop' });
      console.log(`ok ${slug}-${tag}`);
    } catch (e) { console.log(`FEHLER ${slug}-${tag}`); }
    await p.close();
  }
  await b.close();
  console.log('fertig');
})();
