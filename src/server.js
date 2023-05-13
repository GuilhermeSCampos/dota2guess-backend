const app = require('./app')
const cron = require('node-cron');
const { sortClassicHeroes, sortQuoteHeroes, sortSkillHeroes } = require('./utils/sortHeroes')
const { resetCount } = require('./utils/setStatus')

cron.schedule('* * * * *', function () {
  sortClassicHeroes();
  sortQuoteHeroes();
  sortSkillHeroes();
  resetCount()
  console.log('Sorteando herois a cada minuto');
});

app.listen(3000, () => {
  console.log('API ON')
})