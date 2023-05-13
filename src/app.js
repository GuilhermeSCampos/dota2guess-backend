const heroesRouter = require('./routes/heroes.router')
const statusRouter = require('./routes/status.router')

const express = require('express');
require('express-async-errors')

const app = express();
app.use(express.json());

app.use('/heroes', heroesRouter)
app.use('/status', statusRouter)


module.exports = app