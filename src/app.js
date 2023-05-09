const express = require('express')
require('express-async-errors')

const app = express();
app.use(express.json());

app.get('/', (req_, res) => {
  res.send('hello teste')
});

module.exports = app