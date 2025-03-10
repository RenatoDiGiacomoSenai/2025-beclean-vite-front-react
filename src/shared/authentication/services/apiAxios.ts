import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://beclean-dev-api.azurewebsites.net/Api',
  headers: {
    'Content-Type': 'application/json',
    'access-Control-Allow-Orign': '*',
  }
});