const quoteModel = require('../models/quoteGuess.model');

const { findQuotesAndAudios } = require("../utils/helpers")

const { sortHeroes } = require('../utils/sortHeroes')

const getTodayInfo = async () => {
  const data = await quoteModel.getTodayInfo();
  return data;
}

const deleteOldestHero = async (generatedHeroes) => {
  const MAX_LENGTH = 15
  // console.log(generatedHeroes, generatedHeroes.length)
  if (generatedHeroes.length == MAX_LENGTH) {
    let heroName = generatedHeroes[0]
    await quoteModel.deleteGeneratedHero(heroName)
  }
}

const dailySort = async () => {
  try {
    let hero = sortHeroes();
    let generatedHeroes = await quoteModel.getGeneratedHeroes()
    const prohibitedHeroes = ["Marci", "Primal Beast", "Io", "Phoenix"]
    generatedHeroes = generatedHeroes.map((e) => e.hero)
    await deleteOldestHero(generatedHeroes)

    while (generatedHeroes.includes(hero.name) || prohibitedHeroes.includes(hero.name)) {
      hero = sortHeroes();
    }

    const { responses } = findQuotesAndAudios(hero.name)
    const randomSelector = Math.floor(Math.random() * responses.length)
    const { text, audioLink } = responses[randomSelector]

    await quoteModel.resetCount();
    await quoteModel.updateHeroes(hero.name, text, audioLink)
    await quoteModel.generateHero(hero.name)
  } catch (error) {
    console.log(error)
  }
}

const sum = async () => {
  try {
    await quoteModel.sumCount()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  dailySort,
  sum,
  getTodayInfo,
}