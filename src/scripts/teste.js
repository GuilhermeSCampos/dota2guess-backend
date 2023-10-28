const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
require('dotenv').config();


const teste = async () => {
  
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath,
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto('https://spacejelly.dev/');

  const title = await page.title();
  const description = await page.$eval('meta[name="description"]', element => element.content);

  await browser.close();

  console.log(title, description);
}


