const connection = require('./connection');

const getTodayInfo = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM classicguess',
  );
  return result[0]
}


const getGeneratedHeroes = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM generatedclassic',
  );
  return result;
}

const deleteGeneratedHero = async (heroName) => {
  return connection.execute(
    'DELETE FROM generatedclassic WHERE hero = ?',
    [heroName],
  );
}

const generateHero = async (heroName) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO generatedclassic (hero) VALUES (?)`,
    [heroName],
  );
  return insertId;
}

const resetAll = async () => {
  return connection.execute(
    'UPDATE quoteguess SET count = 0,todayhero = "", lasthero = ""',
  )
}

const resetCount = async () => {
  return connection.execute(
    'UPDATE classicguess SET count = 0'
  )
}

const updateHeroes = async (newHero, quote, audioLink, skillImg, skillName) => {
  const info = await getTodayInfo();
  const { todayhero } = info
  return connection.execute(
    'UPDATE classicguess SET todayhero = ?, lasthero = ?, quote = ?, audioLink = ?, skillimg = ?, skillName = ?',
    [newHero, todayhero, quote, audioLink, skillImg, skillName]
  )
}

const sumCount = async () => {
  const info = await getTodayInfo();
  const { count } = info;
  return connection.execute(
    'UPDATE classicguess SET count = ?',
    [count + 1]
  )
}

module.exports = {
  getTodayInfo,
  updateHeroes,
  resetCount,
  sumCount,
  getGeneratedHeroes,
  deleteGeneratedHero,
  generateHero
}
