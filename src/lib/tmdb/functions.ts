import tmdbClient from './client'
import { tmdbEndpoints } from './endpoints'
import {
  movieResultSchema,
  movieSchema,
  tvResultSchema,
  tvSchema,
} from './schema'

// === Get Trending Movies ===
export const getTrendingMovies = async () => {
  const { data } = await tmdbClient.get(tmdbEndpoints.trending.movies)
  return movieResultSchema.array().parse(data.results)
}

// === Get Trending TV ===
export const getTrendingTV = async () => {
  const { data } = await tmdbClient.get(tmdbEndpoints.trending.tv)
  return tvResultSchema.array().parse(data.results)
}

// === Get Movie Details ===
export const getMovieDetails = async (id: number) => {
  const { data } = await tmdbClient.get(tmdbEndpoints.movie(id))
  const parsed = movieSchema.safeParse(data)

  if (!parsed.success) {
    throw new Error(`Invalid Movie data from TMDB: ${parsed.error}`)
  }

  return parsed.data
}

// === Get TV Details ===
export const getTVDetails = async (id: number) => {
  const { data } = await tmdbClient.get(tmdbEndpoints.tv(id))

  const parsed = tvSchema.safeParse(data)

  if (!parsed.success) {
    throw new Error(`Invalid TV data from TMDB: ${parsed.error}`)
  }

  return parsed.data
}
