const skillModel = require('../models/skillGuess.model');
const { sortHeroes } = require('./heroes.service')

const { findHero } = require('../utils/helpers')


const getTodayInfo = async () => {
  const data = await skillModel.getTodayInfo();
  return data;
}

const deleteOldestHero = async (generatedHeroes) => {
  const MAX_LENGTH = 15
  if (generatedHeroes.length >= MAX_LENGTH) {
    let heroName = generatedHeroes[0]
    await skillModel.deleteGeneratedHero(heroName)
  }
}

const dailySort = async (heroes) => {
  try {
    let hero = sortHeroes(heroes);
    let generatedHeroes = await skillModel.getGeneratedHeroes()
    generatedHeroes = generatedHeroes.map((e) => e.hero)

    await deleteOldestHero(generatedHeroes)

    while (generatedHeroes.includes(hero.name)) {
      hero = sortHeroes(heroes);
    }
    
    const { skills } = findHero(hero.name);
    const randomSelector = Math.floor(Math.random() * skills.length)
    const { skillImg, skillName } = skills[randomSelector];
    let rotation = Math.floor(Math.random() * 3) + 1;

    await skillModel.resetCount();
    await skillModel.updateHeroes(hero.name, skillImg, skillName, rotation)
    await skillModel.generateHero(hero.name)
  } catch (error) {
    console.log(error)
  }
}


const sum = async () => {
  try {
    await skillModel.sumCount()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  dailySort,
  sum,
  getTodayInfo,
}