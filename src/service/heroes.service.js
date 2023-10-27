const { insertHeroes, truncateTable } = require('../models/heroes.model');

const insertFirstHalf = async (heroes) => {
  await truncateTable();

  return insertHeroes(heroes);

}

const insertSecondHalf = (heroes) => {
  return insertHeroes(heroes);
}

const sortHeroes = (heroes) => {
  let randomNumber = Math.floor(Math.random() * 124);
  let newHero = heroes[randomNumber]
  return newHero
}

module.exports = {
  insertFirstHalf,
  insertSecondHalf,
  sortHeroes
}