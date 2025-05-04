import axios, { AxiosInstance } from 'axios'

const tmdb: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    Accept: 'application/json',
  },
})

export default tmdb
