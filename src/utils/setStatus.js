const fs = require('fs')
const { getDailyStatus } = require('./parseFiles')

const setClassicHeroes = (todayHeroName, lastHeroName) => {
  const dailyStatus = getDailyStatus()
  dailyStatus.classicGuess.todayHero = todayHeroName
  dailyStatus.classicGuess.lastHero = lastHeroName
  fs.writeFileSync(__dirname + "/../database/dailyStatus.json", JSON.stringify(dailyStatus))
  return console.log("Classic guess names updated!!")
}

const setQuoteHeroes = (todayHeroName, lastHeroName) => {
  const dailyStatus = getDailyStatus()
  dailyStatus.quoteGuess.todayHero = todayHeroName
  dailyStatus.quoteGuess.lastHero = lastHeroName
  fs.writeFileSync(__dirname + "/../database/dailyStatus.json", JSON.stringify(dailyStatus))
  return console.log("Classic quote names updated!!")
}

const setSkillHeroes = (todayHeroName, lastHeroName) => {
  const dailyStatus = getDailyStatus()
  dailyStatus.skillGuess.todayHero = todayHeroName
  dailyStatus.skillGuess.lastHero = lastHeroName
  fs.writeFileSync(__dirname + "/../database/dailyStatus.json", JSON.stringify(dailyStatus))
  return console.log("Classic skill names updated!!")
}

const updateClassicCount = () => {
  const status = getDailyStatus();
  status.classicGuess.count += 1;
  fs.writeFileSync(__dirname + '/../database/dailyStatus.json', JSON.stringify(status))
  return status
}

const updateQuoteCount = () => {
  const status = getDailyStatus();
  status.quoteGuess.count += 1;
  fs.writeFileSync(__dirname + '/../database/dailyStatus.json', JSON.stringify(status))
  return status
}

const updateSkillCount = () => {
  const status = getDailyStatus();
  status.skillGuess.count += 1;
  fs.writeFileSync(__dirname + '/../database/dailyStatus.json', JSON.stringify(status))
  return status
}

const resetCount = () => {
  const status = getDailyStatus();
  status.skillGuess.count = 0;
  status.quoteGuess.count = 0;
  status.classicGuess.count = 0;
  fs.writeFileSync(__dirname + '/../database/dailyStatus.json', JSON.stringify(status))
  return status
}

module.exports = {
  setClassicHeroes,
  setQuoteHeroes,
  setSkillHeroes,
  updateClassicCount,
  updateQuoteCount,
  updateSkillCount,
  resetCount
}


