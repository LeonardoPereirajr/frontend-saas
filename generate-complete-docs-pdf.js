const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('http://localhost:4201', { waitUntil: 'networkidle0' });

    await page.waitForSelector('.menu');

    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.menu a')).map(a => a.href);
    });

    for (let link of links) {
        console.log(`Acessando: ${link}`);
        await page.goto(link, { waitUntil: 'networkidle0' });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
    await page.pdf({ path: 'compodoc-complete.pdf', format: 'A4', printBackground: true });

    await browser.close();
    console.log('PDF completo gerado com sucesso!');
})();
