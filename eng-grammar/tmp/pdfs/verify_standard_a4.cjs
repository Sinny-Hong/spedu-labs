const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { PDFDocument } = require('pdf-lib');

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'grammar-cards.js'), 'utf8');
const files = [...source.matchAll(/filename:\s*"(grammar_[^"]+\.html)"/g)]
  .map(match => match[1])
  .filter(filename => fs.existsSync(path.join(root, filename)))
  .filter(filename => !process.env.ONLY_FILE || filename === process.env.ONLY_FILE);
const previewFiles = new Set([
  'grammar_I.html',
  'grammar_yesterday.html',
  'grammar_months.html',
  'grammar_under_place.html',
  'grammar_there_is_there_are.html'
]);

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const results = [];
  const previewDocuments = [];

  for (let index = 0; index < files.length; index += 1) {
    const filename = files[index];
    let loaded = false;
    for (let attempt = 0; attempt < 3 && !loaded; attempt += 1) {
      try {
        await page.goto(`http://127.0.0.1:8765/${filename}`, { waitUntil: 'load', timeout: 30000 });
        await page.waitForFunction(() => {
          const grid = document.querySelector('.grid');
          const heading = document.querySelector('h1');
          return (grid && getComputedStyle(grid).display === 'grid') ||
            (heading && parseFloat(getComputedStyle(heading).fontSize) >= 20);
        }, undefined, { timeout: 30000 });
        loaded = true;
      } catch (error) {
        if (attempt === 2) throw error;
      }
    }
    await page.evaluate(async () => {
      if (document.fonts) await document.fonts.ready;
      window.print = () => {};
      window.printWorksheet(false);
    });
    await page.waitForTimeout(180);
    const bytes = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, scale: 1 });
    const document = await PDFDocument.load(bytes);
    const pageCount = document.getPageCount();
    results.push({ filename, pageCount });
    if (previewFiles.has(filename)) previewDocuments.push(document);
    process.stdout.write(`[${index + 1}/${files.length}] ${filename}: ${pageCount}\n`);
  }

  const merged = await PDFDocument.create();
  for (const document of previewDocuments) {
    const copied = await merged.copyPages(document, document.getPageIndices());
    copied.forEach(pageItem => merged.addPage(pageItem));
  }
  fs.mkdirSync(path.join(root, 'output', 'pdf'), { recursive: true });
  fs.writeFileSync(path.join(root, 'output', 'pdf', '文法教材_A4版面驗證_4頁.pdf'), await merged.save());
  fs.writeFileSync(path.join(root, 'tmp', 'pdfs', 'standard-a4-check.json'), JSON.stringify(results, null, 2));
  await browser.close();
  process.stdout.write(`RESULT ${JSON.stringify(results)}\n`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
