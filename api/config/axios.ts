// api/config/axios.ts
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://php.localidautore.it/weddingdeejay',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Interceptor per gestire le risposte
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Errore API:', error)
        return Promise.reject(error)
    }
)

export default axiosInstance