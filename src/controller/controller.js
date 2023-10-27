const classicService = require("../service/classicGuess.service")
const skillService = require("../service/skillGuess.service")
const quoteService = require("../service/quoteGuess.service")
const { getHeroes } = require("../models/heroes.model")


const getDailyStatus = async (req_, res) => {
  const classic = await classicService.getTodayInfo();
  const quote = await quoteService.getTodayInfo();
  const skill = await skillService.getTodayInfo();
  const heroes = await getHeroes();

  return res.status(200).json({
    classic,
    quote,
    skill,
    heroes
  })
}

module.exports = {
  getDailyStatus
}