// Importe as constantes e funções necessárias
const { insertHeroes, truncateTable } = require('../models/heroes.model');
const { getPositionPercentages } = require('../scripts/getMostPlayedRoles');
const { updateHeroesRole } = require('../models/heroes.model');

const calculateRole = (hero) => {
  const roles = {
    carry: 'Safe Lane',
    mid: 'Mid Lane',
    offlane: 'Off Lane',
    sup4: 'Soft Support',
    sup5: 'Hard Support',
  };

  const calculatedRoles = Object.keys(roles).filter((role) => {
    const percentage = parseFloat(hero[role]);
    return percentage > 25;
  });

  return calculatedRoles.length > 0 ? calculatedRoles.map(role => roles[role]).join(', ') : 'Undefined';
};


const mapAndCreateRoles = async () => {
  const heroes = await getPositionPercentages();
  const mappedHeroes = heroes.map((hero) => {
    return {
      name: hero.name,
      role: calculateRole(hero),
    };
  });

  await updateHeroesRole(mappedHeroes);
  console.log('terminou');
};

const insertFirstHalf = async (heroes) => {
  await truncateTable();
  return insertHeroes(heroes);
};

const insertSecondHalf = (heroes) => {
  return insertHeroes(heroes);
};

const sortHeroes = (heroes) => {
  let randomNumber = Math.floor(Math.random() * 124);
  let newHero = heroes[randomNumber];
  return newHero;
};

module.exports = {
  insertFirstHalf,
  insertSecondHalf,
  sortHeroes,
  mapAndCreateRoles, // Adicione a função mapAndCreateRoles ao módulo
};
