import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://fitness-app-1114.herokuapp.com/'
        : 'http://localhost:3000/api'
})

export default api;