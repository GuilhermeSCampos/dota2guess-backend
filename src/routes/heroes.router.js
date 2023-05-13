const express = require('express');
const { getHeroes, findHero, findQuotesAndAudios, getDailyStatus } = require('../utils/parseFiles')

const router = express.Router();

router.get('/quote', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.quoteGuess)
});

router.get('/classic', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.classicGuess)
});

router.get('/skill', (req_, res) => {
  const status = getDailyStatus();
  res.json(status.skillGuess)
});



router.get('/:name', (req, res) => {
  const { name } = req.params;
  console.log(name)
  const heroes = getHeroes();
  const kebabCaseHeroes = heroes.map((e) => {
    let heroName = e.name.toLowerCase()
    let splitedName = heroName.split(" ")
    if (splitedName.length > 1) {
      return {
        ...e,
        name: splitedName.join("-")
      }
    }
    return {
      ...e,
      name: heroName.toLowerCase()
    }
  })
  const selectedHero = kebabCaseHeroes.find((e) => name.toLowerCase() === e.name)
  res.json(selectedHero)
})


router.get('/', (req_, res) => {
  const heroes = getHeroes();
  res.json(heroes)
});

module.exports = router