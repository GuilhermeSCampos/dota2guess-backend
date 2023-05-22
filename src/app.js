const heroesRouter = require('./routes/heroes.router')
const statusRouter = require('./routes/status.router')
const classicService = require('./service/classicGuess.service')
const skillService = require('./service/skillGuess.service')
const quoteService = require('./service/quoteGuess.service')

const cors = require('cors')


const express = require('express');
require('express-async-errors')


const app = express();
app.use(cors())
app.use(express.json());

app.use('/heroes', heroesRouter)
app.use('/status', statusRouter)

app.post('/sortall', async (req_, res) => {
  await classicService.dailySort();
  await skillService.dailySort();
  await quoteService.dailySort();

  res.send('Heróis Sorteados!')
})

app.get('/', (req_, res) => {
  res.send('API FUNCIONANDO!');
});


module.exports = app