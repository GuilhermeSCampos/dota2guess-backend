const app = require('./src/app')
const cron = require('node-cron');
const moment = require('moment-timezone');
const { sortClassicHeroes, sortQuoteHeroes, sortSkillHeroes } = require('./src/utils/sortHeroes')
const { resetCount } = require('./src/utils/setStatus')
require('dotenv').config();

const schedule = require('node-schedule');

moment.tz.setDefault('America/Sao_Paulo');

function sortAll() {
  sortClassicHeroes();
  sortQuoteHeroes();
  sortSkillHeroes();
  resetCount()
  console.log('sorteou!')
}

schedule.scheduleJob('* * * * *', sortAll);

app.listen(process.env.PORT || 9001, () => {

  console.log('API ON')
})