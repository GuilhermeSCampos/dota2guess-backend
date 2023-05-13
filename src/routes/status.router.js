const { getDailyStatus } = require('../utils/parseFiles')
const { updateClassicCount, updateQuoteCount, updateSkillCount } = require('../utils/setStatus')

const express = require('express');

const router = express.Router()

router.get('/', (req_, res) => {
  const status = getDailyStatus();
  res.json(status)
})

router.get('/classicStatus', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.classicGuess);
})

router.get('/quoteStatus', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.quoteGuess);
})

router.get('/skillStatus', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.skillGuess);
})

router.put('/classicCount', (req_, res) => {
  const newStatus = updateClassicCount();
  res.json(newStatus);
})

router.put('/quoteCount', (req_, res) => {
  const newStatus = updateQuoteCount();
  res.json(newStatus);
})

router.put('/skillCount', (req_, res) => {
  const newStatus = updateSkillCount();
  res.json(newStatus);
})

module.exports = router;