const connection = require('./connection');

const getTodayInfo = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM skillguess',
  );
  return result[0]
}

const updateHeroes = async (newHero, skillimg, skillname, rotation) => {
  const info = await getTodayInfo();
  const { todayhero } = info
  return connection.execute(
    'UPDATE skillguess SET todayhero = ?, lasthero = ?, skillimg = ?, skillname = ?, rotation = ?',
    [newHero, todayhero, skillimg, skillname, rotation]
  )
}

const getGeneratedHeroes = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM generatedskill',
  );
  return result;
}

const deleteGeneratedHero = async (heroName) => {
  return connection.execute(
    'DELETE FROM generatedskill WHERE hero = ?',
    [heroName],
  );
}

const generateHero = async(heroName) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO generatedskill (hero) VALUES (?)`,
    [heroName],
  );
  return insertId;
}

const resetAll = async () => {
  return connection.execute(
    'UPDATE skillguess SET count = 0,todayhero = "", lasthero = "", skillimg = "", skillname = ""',
  )
}

const resetCount = async () => {
  return connection.execute(
    'UPDATE skillguess SET count = 0'
  )
}

const sumCount = async () => {
  const info = await getTodayInfo();
  const { count } = info;
  return connection.execute(
    'UPDATE skillguess SET count = ?',
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

