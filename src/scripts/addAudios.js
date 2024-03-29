const puppeteer = require('puppeteer')
const fs = require('fs')
const { heroesNames } = require('../heroesInfo/heroesNames')
const  attNames  = require('../utils/updateHeroName')

//Modificando os nomes com underscore

let attHeroes = attNames(heroesNames, '_')

//Crawling das falas e audios respectivos

const addAudios = async () => {
  const namesAndAudios = []
  const browser = await puppeteer.launch({
    headless: "new",
    timeout: 10000
  })

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  for (let i = 0; i < 121; i++) {

    await page.goto(`https://dota2.fandom.com/wiki/${attHeroes[i]}/Responses`, {
      waitUntil: "networkidle2",
    });

    console.log(`Crawling ${attHeroes[i]} audio links`)

    let ulHandle = await page.$('#mw-content-text > div > ul:nth-child(5)') || 
    await page.$('#mw-content-text > div > ul:nth-child(6)') ||
    await page.$('#mw-content-text > div > ul:nth-child(7)')

    const audioLinks = await page.evaluate(ul => {
      const lis = ul.querySelectorAll('source');
      return Array.from(lis).map(li => li.src.trim());
    }, ulHandle);

    let audioTexts = await page.evaluate(ul => {
      const lis = ul.querySelectorAll('li');
      return Array.from(lis).map(li => li.textContent.trim());
    }, ulHandle);

    audioTexts = audioTexts.map((e) => e.replace("Link ", ""))

    const responses = audioTexts.map((e, i) => {
      return {
        text: e,
        audioLink: audioLinks[i]
      }
    })
    namesAndAudios.push({
      name: attHeroes[i],
      responses
    })
  }

  fs.writeFileSync(__dirname + '/../heroesInfo/heroesTestAudios.json', JSON.stringify(namesAndAudios))

  await browser.close()
}

module.exports = {
  addAudios
}
