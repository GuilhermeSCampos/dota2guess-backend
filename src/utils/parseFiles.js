const fs = require('fs');
const { get } = require('http');

const getHeroes = () => {
  const data = fs.readFileSync(__dirname + '/../database/heroes.json', 'utf-8');
  const heroes = JSON.parse(data);
  return heroes;
}

const getHeroesNames = () => {
  const data = getHeroes();
  const names = data.map(hero => hero.name);
  const filteredNames = names.map((e) => {
    const spllited = e.split(" ");
    if (spllited.length > 1) {
      return spllited.join("").toLowerCase();
    } else {
      return e.toLowerCase();
    }
  })

  return filteredNames;
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
  getQuotesAndAudios,
  getHeroesNames
}
