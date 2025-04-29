import axios, { AxiosInstance } from 'axios'
import env from '@/config/env'

const tmdb: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${env.TMDB_API_KEY}`,
    Accept: 'application/json',
  },
})

export default tmdb
