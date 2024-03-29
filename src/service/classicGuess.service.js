const classicModel = require('../models/classicGuess.model');
const { sortHeroes } = require('./heroes.service')


const { sortQuoteAndAudio, sortSkill } = require("../utils/helpers")

const getTodayInfo = async () => {
  const data = await classicModel.getTodayInfo();
  return data;
}

const deleteOldestHero = async () => {
  let generatedHeroes = await classicModel.getGeneratedHeroes()
  generatedHeroes = generatedHeroes.map((e) => e.hero)
  const MAX_LENGTH = 15
  while (generatedHeroes.length >= MAX_LENGTH) {
    let heroName = generatedHeroes[0]
    await classicModel.deleteGeneratedHero(heroName)
    generatedHeroes.shift();
  }

  return generatedHeroes;
}

const dailySort = async (heroes) => {
  try {
    let hero = sortHeroes(heroes);

    const generatedHeroes = await deleteOldestHero();

    while (generatedHeroes.includes(hero.name)) {

      hero = sortHeroes(heroes);
    }

    const prohibitedHeroes = ["Marci", "Primal Beast", "Io", "Phoenix"]

    const { text, audioLink } = prohibitedHeroes.includes(hero.name) ? { text: "''", audioLink: "''" } : sortQuoteAndAudio(hero.name)
    const { skillImg, skillName } = sortSkill(hero.name)

    await classicModel.resetCount();
    await classicModel.updateHeroes(hero.name, text, audioLink, skillImg, skillName)
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