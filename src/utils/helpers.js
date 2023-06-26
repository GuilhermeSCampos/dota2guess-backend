const fs = require('fs')
const { getDailyStatus, getQuotesAndAudios, getHeroes } = require('./parseFiles')

const toSnakeCase = (string) => {
  let newString = string.split(" ");
  newString = newString.join("_")
  return newString;
}

const findHero = (heroName) => {
  const heroes = getHeroes();
  const hero = heroes.find((e) => e.name === heroName)
  return hero;
}

const findQuotesAndAudios = (heroName) => {
  const quotes = getQuotesAndAudios();
  const quotesAndAudios = quotes.find((e) => e.name === toSnakeCase(heroName))
  return quotesAndAudios;
}

const sortQuoteAndAudio = (heroName) => {
  const status = getDailyStatus();
  const { responses } = findQuotesAndAudios(heroName)
  const randomSelector = Math.floor(Math.random() * responses.length)
  const info = responses[randomSelector]
  return info;
  // status.quoteGuess.quote = info.text;
  // status.quoteGuess.audioLink = info.audioLink;
  // fs.writeFileSync(__dirname + "/../database/dailyStatus.json", JSON.stringify(status));
}

const sortSkill = (heroName) => {
  const status = getDailyStatus();
  const { skills } = findHero(heroName);
  const randomSelector = Math.floor(Math.random() * skills.length)
  const info = skills[randomSelector];
  return info;
  // status.skillGuess.skillImg = skillImg;
  // status.skillGuess.skillName = skillName;
  // fs.writeFileSync(__dirname + "/../database/dailyStatus.json", JSON.stringify(status));
}

sortSkill("Clinkz")



module.exports = {
  sortQuoteAndAudio,
  findHero,
  findQuotesAndAudios,
  sortSkill
}