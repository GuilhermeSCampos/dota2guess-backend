const quoteService = require("../service/quoteGuess.service")

const getTodayInfo = async (req_, res) => {
  const data = await quoteService.getTodayInfo();
  return res.status(200).json(data)
}

const dailySort = async (req_, res) => {
  await quoteService.dailySort();
  const newStatus = quoteService.getTodayInfo();
  return res.status(200).json(newStatus);
}

const updateCount = async (req_, res) => {
  await quoteService.sum()
  return res.sendStatus(200);
}

module.exports = {
  getTodayInfo,
  dailySort,
  updateCount
}