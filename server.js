const app = require('./src/app')

require('dotenv').config();


app.listen(process.env.PORT || 9001, () => {
  console.log('API ON na porta' + process.env.PORT || 9001)
})