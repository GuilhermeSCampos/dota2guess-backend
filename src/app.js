const heroesRouter = require('./routes/heroes.router')
const statusRouter = require('./routes/status.router')
const cors = require('cors')

const express = require('express');
require('express-async-errors')

const app = express();
app.use(cors())
app.use(express.json());

app.use('/heroes', heroesRouter)
app.use('/status', statusRouter)
app.get('/', (req_, res) => {
  res.send('API FUNCIONANDO!');
});


module.exports = app