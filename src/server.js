const app = require('./app')
const cron = require('node-cron');
const moment = require('moment-timezone');
const { sortClassicHeroes, sortQuoteHeroes, sortSkillHeroes } = require('./utils/sortHeroes')
const { resetCount } = require('./utils/setStatus')

moment.tz.setDefault('America/Sao_Paulo');

app.listen(3000, () => {
  cron.schedule('0 0 * * *', function() {
    sortClassicHeroes();
    sortQuoteHeroes();
    sortSkillHeroes();
    resetCount()
    console.log('Sorteando herois as 00:00 UTC -3');
  });
  console.log('API ON')
})