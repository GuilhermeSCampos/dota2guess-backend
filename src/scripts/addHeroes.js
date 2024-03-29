
const chromium = require("chrome-aws-lambda");
const { getHeroesNames } = require('../utils/parseFiles')
require('dotenv').config()

const fiveSkillHeroes = ['Beastmaster', 'Dark Willow',
  'Earth Spirit', 'Ember Spirit', 'Ogre Magi', 'Techies', 'Timbersaw', 'Tinker', 'Tiny', 'Treant Protector', 'Troll Warlord']

const sixSkillHeros = ['Io', 'Keeper of the Light', 'Morphling']

const heroesNames = getHeroesNames();

let puppeteer;

puppeteer = require("puppeteer-core");

if (process.env.CYCLIC_URL) {
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

const addHeroes = async (initialIndex, FinalIndex) => {
  let options = {
    headless: "new",
    timeout: 50000
  };

  if (process.env.CYCLIC_URL) {
    options = {
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }

  const URL = `https://www.dota2.com/hero/${heroesNames[initialIndex]}`
  const heroes = []
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto(URL, {
    waitUntil: "networkidle2",
  });

  for (let i = initialIndex; i < FinalIndex; i++) {
    let name = await page.evaluate(() => {
      return document.querySelector('.heropage_HeroName_2IcIu')?.innerHTML
    })
    while (!name) {
      name = await page.evaluate(() => {
        return document.querySelector('.heropage_HeroName_2IcIu')?.innerHTML
      })
    }

    let img = await page.evaluate(() => {
      return document.querySelector('.heropage_Portrait_CR-Bb')?.src
    })

    let primaryAttr = await page.evaluate(() => {
      return document.querySelector('.heropage_PrimaryStat_3HGWJ')?.innerHTML
    })

    let attackType = await page.evaluate(() => {
      return document.querySelector('.heropage_Value_3ce-D')?.innerHTML
    })

    let baseHp = await page.evaluate(() => {
      return document.querySelector('.heropage_HealthBar_D6gmc')?.innerText.substring(0, 3)
    })

    let baseMp = await page.evaluate(() => {
      return document.querySelector('.heropage_ManaBar_1aQk6')?.innerText.substring(0, 3)
    })

    let baseAttack = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(1) > div:nth-child(2)')?.innerText
    })

    let baseDefense = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(2) > div:nth-child(2)')?.innerText
    })

    let moveSpeed = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(3) > div:nth-child(2)')?.innerText
    })

    let strength = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(1) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })

    let agility = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(2) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })

    let intelligence = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(3) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })

    const skills = []

    const divChildren = await page.$('.heropage_AbilitySelector_1vjw5')

    let numberOfSkills = 4
    let initialSkill = 0;

    if (fiveSkillHeroes.includes(name)) {
      console.log('five skills hero')
      numberOfSkills = 5
    }

    if (sixSkillHeros.includes(name)) {
      console.log('six skills hero')
      numberOfSkills = 6
    }

    if (name === 'Invoker') {
      console.log('invoker')
      initialSkill = 4;
      numberOfSkills = 14
    }

    for (let i = initialSkill; i < numberOfSkills; i++) {
      const child = await divChildren.$(`div:nth-child(${i + 1})`)
      await child.click()
      let skillImg = await page.evaluate(() => {
        return document.querySelector('.heropage_AbilityImage_171zq')?.src
      })

      let skillName = await page.evaluate(() => {
        return document.querySelector('.heropage_AbilityName_1rBGH')?.innerText
      })

      skills.push({
        skillImg,
        skillName
      })
    }

    console.log(name)

    // if (primaryAttr === "Universal") {
    //   let sumAtt = (Number(strength) + Number(agility) + Number(intelligence)) * 0.7;
    //   const splitedBaseAttack = baseAttack.split("-")
    //   if (splitedBaseAttack[1] === '3') {
    //     splitedBaseAttack[0] = Math.floor(sumAtt) - 3;
    //     splitedBaseAttack[1] = Math.floor(sumAtt) + 3;
    //     baseAttack = (Number(splitedBaseAttack[0]) + Number(splitedBaseAttack[1])) / 2
    //   } else {
    //     splitedBaseAttack[0] = Number(splitedBaseAttack[0]) + Math.floor(sumAtt);
    //     splitedBaseAttack[1] = Number(splitedBaseAttack[1]) + Math.floor(sumAtt);
    //     baseAttack = (Number(splitedBaseAttack[0]) + Number(splitedBaseAttack[1])) / 2
    //   }
    // }

    // if (primaryAttr !== "Universal") {
    //   const splitedBaseAttack = baseAttack.split("-")
    //   baseAttack = (Number(splitedBaseAttack[0]) + Number(splitedBaseAttack[1])) / 2
    // }

    const newHero = {
      name,
      primaryAttr,
      attackType,
      strength,
      agility,
      intelligence,
      img,
      baseHp,
      baseMp,
      baseAttack,
      baseDefense,
      moveSpeed,
      skills
    }

    heroes.push(newHero)

    const nextHeroSelector = '#dota_react_root > div > div >' +
      'div.heropage_UnderBarSection_HGabF > div.heropage_BottomSection_kmUD- > a:nth-child(3)'

    let button = await page.$(nextHeroSelector)
    while (!button) {
      button = await page.$(nextHeroSelector)
    }
    await page.click(nextHeroSelector)
  }
  await browser.close();
  // fs.writeFileSync(__dirname + '/../heroesInfo/heroes.json', JSON.stringify(heroes))
  return heroes;
}



module.exports = {
  addHeroes
}