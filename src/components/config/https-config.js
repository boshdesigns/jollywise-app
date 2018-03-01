import axios from 'axios'
// export const HTTP = axios.create({
//   baseURL: 'https://jollyapps.jollywise.co.uk/api/enter/en_GB/jollywise/ashtest/',
//   headers: {
//   }
// })

// For testing ONLY ****
export const HTTPS = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4f5a6fa2ae1f25030eda6cff7c97de4a&q=brighton&cnt=16',
  headers: {
  }
})
