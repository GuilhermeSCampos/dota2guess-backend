const app = require('./src/app')
const cron = require('node-cron');
const moment = require('moment-timezone');
const { sortClassicHeroes, sortQuoteHeroes, sortSkillHeroes } = require('./src/utils/sortHeroes')
const { resetCount } = require('./src/utils/setStatus')

moment.tz.setDefault('America/Sao_Paulo');

app.listen(3000, () => {
  cron.schedule('* * * * *', function() {
    sortClassicHeroes();
    sortQuoteHeroes();
    sortSkillHeroes();
    resetCount()
    console.log('Sorteando herois as 00:00 UTC -3');
  });
  console.log('API ON')
})