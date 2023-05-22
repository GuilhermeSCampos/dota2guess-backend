const skillService = require("../service/skillGuess.service")

const getTodayInfo = async (req_, res) => {
  const data = await skillService.getTodayInfo();
  return res.status(200).json(data)
}

const dailySort = async (req_, res) => {
  await skillService.dailySort();
  const newStatus = skillService.getTodayInfo();
  return res.status(200).json(newStatus);
}

const updateCount = async (req_, res) => {
  await skillService.sum()
  return res.sendStatus(200);
}

module.exports = {
  getTodayInfo,
  dailySort,
  updateCount
}