import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'http://beclean-dev-api.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
    'access-Control-Allow-Orign': '*',
  },
  withCredentials: true,
})

/**
   admin@beclean.com
Admin@123
   */

api.use