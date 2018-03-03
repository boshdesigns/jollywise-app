import axios from 'axios'

export const HTTPS = axios.create({
  baseURL: 'https://jollyapps.jollywise.co.uk/api/enter/en_GB/jollywise/',
  headers: {
    'Content-Type': 'application/json'
  }
})
