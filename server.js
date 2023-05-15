const app = require('./src/app')
const cron = require('node-cron');
const moment = require('moment-timezone');

require('dotenv').config();

moment.tz.setDefault('America/Sao_Paulo');

app.listen(process.env.PORT || 9001, () => {

  console.log('API ON')
})