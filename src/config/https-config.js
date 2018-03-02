import axios from 'axios'

export const HTTPS = axios.create({
  baseURL: 'https://jollyapps.jollywise.co.uk/api/enter/en_GB/jollywise/ashtest/',
  headers: {
    // added headers if needed
  }
})
