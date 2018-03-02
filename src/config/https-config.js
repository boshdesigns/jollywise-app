import axios from 'axios'

// export const HTTPS = axios.create({
//   baseURL: 'https://jollyapps.jollywise.co.uk/api/enter/en_GB/jollywise/ashtest/',
//   headers: {
//     // added headers if needed
//   }
// })

// For testing ONLY ****
export const HTTPS = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/forecast/',
  headers: {
  }
})
