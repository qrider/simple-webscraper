const puppeteer = require('puppeteer');
console.log("main");

const URL = 'https://www.artnet.com/auctions/buy-now-in-technicolor-1221/';
//const URL = 'https://www.google.com';

const SELECTOR = 'body > div.container.my-container.mainCnt.ng-scope > div.allArtworks.ng-scope > div.sale-info > div > div > section.info.hidden-xs > p';
//const SELECTOR = 'body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe > div.KxwPGc.ssOUyb > a > span';

async function run(){
    let content = await scrape();
    console.log(content);
}

async function scrape() {
     
    try {
        console.log("here 1");

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URL);

        console.log("here 2");

        //let urls = await page.evaluate(() => {});

        const elHandle = await page.$(SELECTOR);
        const html = await page.evaluate((el) => el.innerHTML, elHandle);
        await elHandle.dispose();
        console.log("here 3");

        browser.close();

        return html;
    } catch (e){
        return e;
    }
}

run();





