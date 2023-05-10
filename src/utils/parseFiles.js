const fs = require('fs')

const getHeroes = () => {
  const data = fs.readFileSync(__dirname + '/../database/heroes.json', 'utf-8');
  const heroes = JSON.parse(data);
  return heroes;
}

const getDailyStatus = () => {
  const data = fs.readFileSync(__dirname + '/../database/dailyStatus.json', 'utf-8');
  const status = JSON.parse(data);
  return status;
}

const getGeneratedHeroes = () => {
  const data = fs.readFileSync(__dirname + '/../database/generatedHeroes.json', 'utf-8');
  const generatedHeroes = JSON.parse(data);
  return generatedHeroes;
}

const getQuotesAndAudios = () => {
  const data = fs.readFileSync(__dirname + '/../database/generatedHeroes.json', 'utf-8');
  const quotesAndAudios = JSON.parse(data);
  return quotesAndAudios;
}

module.exports = {
  getHeroes,
  getDailyStatus,
  getGeneratedHeroes,
  getQuotesAndAudios
}