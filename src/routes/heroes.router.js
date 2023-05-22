const express = require('express');
const { getHeroes, findHero, findQuotesAndAudios, getDailyStatus } = require('../utils/parseFiles')
const classicController = require("../controller/classicGuess.controller")

const router = express.Router();

router.get('/', (req_, res) => {
  const heroes = getHeroes();
  res.json(heroes)
});

module.exports = router