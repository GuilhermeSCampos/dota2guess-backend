const classicModel = require('../models/classicGuess.model');

const { sortHeroes } = require('../utils/sortHeroes')

const getTodayInfo = async () => {
  const data = await classicModel.getTodayInfo();
  return data;
}

const deleteOldestHero = async (generatedHeroes) => {
  const MAX_LENGTH = 15
  if (generatedHeroes.length == MAX_LENGTH) {
    let heroName = generatedHeroes[0]
    await classicModel.deleteGeneratedHero(heroName)
  }
}

const dailySort = async () => {
  try {
    let hero = sortHeroes();
    let generatedHeroes = await classicModel.getGeneratedHeroes()

    generatedHeroes = generatedHeroes.map((e) => e.hero)
    await deleteOldestHero(generatedHeroes)

    while (generatedHeroes.includes(hero.name)) {
      hero = sortHeroes();
    }

    await classicModel.resetCount();
    await classicModel.updateHeroes(hero.name)
    await classicModel.generateHero(hero.name)
  } catch (error) {
    console.log(error)
  }
}

const sum = async () => {
  try {
    await classicModel.sumCount()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  dailySort,
  sum,
  getTodayInfo,
}