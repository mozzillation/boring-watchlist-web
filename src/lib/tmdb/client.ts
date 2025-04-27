import axios from 'axios'

const tmdbClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    Accept: 'application/json',
  },
})

export default tmdbClient
