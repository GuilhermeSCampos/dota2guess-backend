const { getHeroes } = require('./utils/parseFiles')
const express = require('express');
require('express-async-errors')

const app = express();
app.use(express.json());

app.get('/heroes', (req_, res) => {
  const heroes = getHeroes();
  res.json(heroes)
});

app.get('/heroes/:name', (req, res) => {
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



module.exports = app