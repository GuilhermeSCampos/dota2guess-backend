const connection = require('./connection');

const getTodayInfo = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM quoteguess',
  );
  return result[0]
}

const updateHeroes = async (newHero, quote, audiolink) => {
  const info = await getTodayInfo();
  const { todayhero } = info
  return connection.execute(
    'UPDATE quoteguess SET todayhero = ?, lasthero = ?, quote = ?, audiolink = ?',
    [newHero, todayhero, quote, audiolink]
  )
}

const getGeneratedHeroes = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM generatedquote',
  );
  return result;
}

const deleteGeneratedHero = async (heroName) => {
  return connection.execute(
    'DELETE FROM generatedquote WHERE hero = ?',
    [heroName],
  );
}

const generateHero = async(heroName) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO generatedquote (hero) VALUES (?)`,
    [heroName],
  );
  return insertId;
}

const resetAll = async () => {
  await connection.execute(
    'UPDATE quoteguess SET count = 0,todayhero = "", lasthero = "", quote = "", audiolink = ""',
  )
}

const resetCount = async () => {
  await connection.execute(
    'UPDATE quoteguess SET count = 0'
  )
}

const sumCount = async () => {
  const info = await getTodayInfo();
  const { count } = info;
  await connection.execute(
    'UPDATE quoteguess SET count = ?',
    [count + 1]
  )
}

module.exports = {
  getTodayInfo,
  updateHeroes,
  resetCount,
  sumCount,
  generateHero,
  getGeneratedHeroes,
  deleteGeneratedHero
}

