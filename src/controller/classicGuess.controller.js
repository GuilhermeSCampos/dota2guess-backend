const classicService = require("../service/classicGuess.service")

const getTodayInfo = async (req_, res) => {
  const data = await classicService.getTodayInfo();
  return res.status(200).json(data)
}

const dailySort = async (req_, res) => {
  await classicService.dailySort();
  const newStatus = classicService.getTodayInfo();
  return res.status(200).json(newStatus);
}

const updateCount = async (req_, res) => {
  await classicService.sum()
  return res.sendStatus(200);
}

module.exports = {
  getTodayInfo,
  dailySort,
  updateCount
}