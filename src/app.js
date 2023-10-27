const heroesRouter = require('./routes/heroes.router')
const statusRouter = require('./routes/status.router')
const classicService = require('./service/classicGuess.service')
const skillService = require('./service/skillGuess.service')
const quoteService = require('./service/quoteGuess.service')
const heroesService = require('./service/heroes.service')
const { getHeroes } = require('./models/heroes.model')

const cors = require('cors')


const express = require('express');
require('express-async-errors')


const app = express();
app.use(cors())
app.use(express.json());

app.use('/heroes', heroesRouter)
app.use('/status', statusRouter)

app.post('/sortall', async (req_, res) => {
  const heroes = await getHeroes();

  await classicService.dailySort(heroes);

  await skillService.dailySort(heroes);

  await quoteService.dailySort(heroes);

  await heroesService.mapAndCreateRoles();

  res.status(201).json({ message: "Sorteio realizado com sucesso!" })
})

app.get('/', (req_, res) => {
  res.send('API FUNCIONANDO!');
});


module.exports = app