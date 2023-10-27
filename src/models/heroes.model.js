const connection = require('./connection');

const insertHeroes = async (heroes) => {
  for (const hero of heroes) {
    const { name, primaryAttr, attackType, strength, agility, intelligence, img, baseHp, baseMp, baseAttack, baseDefense, moveSpeed, gender, skills } = hero;
    const query = `INSERT INTO heroes (name, primaryAttr, attackType, strength, agility, intelligence, img, baseHp, baseMp, baseAttack, baseDefense, moveSpeed, gender, skills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [name, primaryAttr, attackType, strength, agility, intelligence, img, baseHp, baseMp, baseAttack, baseDefense, moveSpeed, gender, JSON.stringify(skills)];

    await connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Erro ao inserir herói:', err);
      } else {
        console.log(`Herói "${name}" inserido com sucesso.`);
      }
    });

  }
  console.log('Todos os heróis foram inseridos com sucesso.');
}

const truncateTable = async () => {

  await connection.execute(
    'TRUNCATE TABLE heroes',
  );
  
}

// Arrow function para recuperar todos os heróis da tabela com suas skills
const getHeroes = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM heroes');
    const heroes = rows.map(hero => {
      const { skills, ...heroData } = hero;
      heroData.skills = JSON.parse(skills);
      return heroData;
    });

    return heroes;
  } catch (err) {
    console.error('Erro ao recuperar os heróis:', err);
  } finally {
  }
}

module.exports = {
  insertHeroes,
  truncateTable,
  getHeroes
}



