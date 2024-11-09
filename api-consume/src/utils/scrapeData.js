import puppeteer from 'puppeteer';

const scrapeData = async (location) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const results = [];

    try {
        const url = `https://kodewilayah.id/search?q=${encodeURIComponent(location)}`;
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
        await page.waitForSelector('table.table-auto tbody', { timeout: 5000 });

        const rows = await page.$$eval('table.table-auto tbody tr', (rows) => {
            return rows.map(row => {
                const codeArea = row.querySelector('td:nth-child(1) a')?.textContent.trim();
                const area = row.querySelector('td:nth-child(2) a')?.textContent.trim();
                return { codeArea, area };
            });
        });

        for (const row of rows) {
            if (row.codeArea && row.area) {
                results.push(row);
            }
        }

        return { results, error: false };  
    } catch (error) {
        console.error('Error scraping data:', error);
        return { results: [], error: true };  
    } finally {
        await browser.close();
    }
}

export default scrapeData;
