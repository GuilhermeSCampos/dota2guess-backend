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

module.exports = {
  setClassicHeroes,
  setQuoteHeroes,
  setSkillHeroes
}


