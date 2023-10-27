const axios = require('axios');
const fs = require('fs');
const { getHeroes } = require('./parseFiles');
require('dotenv').config();

const token = process.env.TOKEN

const query = `
  query {
    heroStats {
      stats(groupByTime: true, groupByPosition: true) {
        heroId
        position
        matchCount
        remainingMatchCount
        time
        winCount
      }
    }
  }
`;


const heroes = getHeroes();
const names = heroes.map(hero => hero.name);

const getHeroesId = async () => {
  const { data } = await axios.get('https://api.stratz.com/api/v1/Hero', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  const dataArray = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const obj = data[key];
      dataArray.push(obj);
    }
  }

  const correctHeroes = [];

  names.forEach(name => {
    const hero = dataArray.find(hero => hero.displayName === name);
    correctHeroes.push(hero);
  });

  return correctHeroes;
}

const getData = async () => {
  const { data: { data: { heroStats: { stats } } } } = await axios.post('https://api.stratz.com/graphql', {
    query,
  }, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const correctHeroes = await getHeroesId();
  const ids = correctHeroes.map(hero => hero.id);

  const heroesPositionSum = [];

  ids.forEach((id) => {
    const data = stats.filter(hero => hero.heroId === id);
    let position1 = 0;
    let position2 = 0;
    let position3 = 0;
    let position4 = 0;
    let position5 = 0;
    let total = 0;

    data.forEach((partialData) => {
      if (partialData.position === 'POSITION_1') {
        position1 += partialData.matchCount;
      }
      if (partialData.position === 'POSITION_2') {
        position2 += partialData.matchCount;
      }
      if (partialData.position === 'POSITION_3') {
        position3 += partialData.matchCount;
      }
      if (partialData.position === 'POSITION_4') {
        position4 += partialData.matchCount;
      }
      if (partialData.position === 'POSITION_5') {
        position5 += partialData.matchCount;
      }

      total += partialData.matchCount;
    })

    const heroPosition = {
      id,
      position1,
      position2,
      position3,
      position4,
      position5,
      total,
    }

    heroesPositionSum.push(heroPosition);
  })

  return heroesPositionSum;
}

const getPositionPercentages = async () => {
  const data = await getData();
  const correctHeroes = await getHeroesId();

  const heroesPercentages = data.map(hero => {
    const {
      id,
      position1,
      position2,
      position3,
      position4,
      position5,
      total,
    } = hero;

    const heroName = correctHeroes.find(hero => hero.id === id).displayName;

    const calculatePercentage = (positionCount) => ((positionCount / total) * 100).toFixed(1);

    const heroPercentages = {
      id,
      name: heroName,
      carry: calculatePercentage(position1),
      mid: calculatePercentage(position2),
      offlane: calculatePercentage(position3),
      sup4: calculatePercentage(position4),
      sup5: calculatePercentage(position5),
    };

    return heroPercentages;
  });

  console.log(heroesPercentages);
}
