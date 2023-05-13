const fs = require('fs')

const getHeroes = () => {
  const data = fs.readFileSync(__dirname + '/../database/heroes.json', 'utf-8');
  const heroes = JSON.parse(data);
  return heroes;
}

const getQuotesAndAudios = () => {
  const data = fs.readFileSync(__dirname + '/../database/quotesAndAudios.json', 'utf-8');
  const quotesAndAudios = JSON.parse(data);
  return quotesAndAudios;
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

module.exports = {
  getHeroes,
  getDailyStatus,
  getGeneratedHeroes,
  getQuotesAndAudios
}
