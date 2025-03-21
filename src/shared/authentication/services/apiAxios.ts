import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/Api',
  // baseURL: 'https://beclean-dev-api.azurewebsites.net/Api',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  })