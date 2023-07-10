// const axios = require('axios');

// const fetchData = async () => {
//   const response = await axios.get('https://api.stratz.com/api/v1/search', {
//     params: {
//       query: `
//         query {
//           heroStats {
//             stats(groupByTime: true, groupByPosition: true) {
//               heroId
//               position
//               matchCount
//               remainingMatchCount
//               time
//               winCount
//             }
//           }
//         }
//       `
//     },
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgxNjc2ODExNTMiLCJ1bmlxdWVfbmFtZSI6Imd1aWxoZXJtZSIsIlN1YmplY3QiOiJjMTZiNjAyMC04ZmUyLTRkMzQtODBiMi1mM2ZjZTRhZWI4YjIiLCJTdGVhbUlkIjoiMjA3NDE1NDI1IiwibmJmIjoxNjg4MTM2MjI3LCJleHAiOjE3MTk2NzIyMjcsImlhdCI6MTY4ODEzNjIyNywiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.c9ZXW7xi5yxra6v5wVzNqbO4-srqIFr5irTpIRTEgao'
//     }
//   });

//   console.log(response.data);
// };

// fetchData();
