const heroesRouter = require('./routes/heroes.router')
const statusRouter = require('./routes/status.router')
const { sortClassicHeroes, sortQuoteHeroes, sortSkillHeroes } = require('./utils/sortHeroes')
const { resetCount } = require('./utils/setStatus')
const cors = require('cors')

const express = require('express');
require('express-async-errors')

function sortAll() {
  sortClassicHeroes();
  sortQuoteHeroes();
  sortSkillHeroes();
  resetCount()
  console.log('sorteou!')
}

const app = express();
app.use(cors())
app.use(express.json());

app.use('/heroes', heroesRouter)
app.use('/status', statusRouter)
app.get('/', (req_, res) => {
  res.send('API FUNCIONANDO!');
});

app.post('/sortAll', (req_, res) => {
  res.send('Heróis Sorteados!')
})


module.exports = app