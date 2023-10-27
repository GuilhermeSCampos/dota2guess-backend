const express = require('express');
const { addHeroes } = require('../scripts/addHeroes');
const { addGenderToHeroes } = require('../scripts/addGenderToHeroes');
const { insertFirstHalf, insertSecondHalf } = require('../service/heroes.service');

const router = express.Router();

router.post('/firsthalf', async (req_, res) => {
  const heroes = await addHeroes(0, 62);
  await insertFirstHalf(addGenderToHeroes(heroes));
  return res.sendStatus(201);
});

router.post('/secondhalf', async (req_, res) => {
  const heroes = await addHeroes(62, 124);
  await insertSecondHalf(addGenderToHeroes(heroes));
  return res.sendStatus(201);
});

module.exports = router