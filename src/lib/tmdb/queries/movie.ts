import endpoint from '../endpoints'
import { Movie, MovieResult, movieResultSchema, movieSchema } from '../schema'
import { fetchAndSafeParse } from '../utils/helpers'

/**
 * Gets detailed information about a specific movie by its ID.
 *
 * @param {number} id - The TMDB movie ID.
 * @returns {Promise<Movie>} - Detailed movie data.
 * @throws Will throw if the movie data is invalid or the request fails.
 */
export const fetchMovieByID = (id: number): Promise<Movie> =>
  fetchAndSafeParse(endpoint.movie.id(id), undefined, movieSchema, 'Movie')

/**
 * Gets a list of trending movies from TMDB this week.
 *
 * @returns {Promise<MovieResult[]>} - An array of trending movie results.
 */
export const fetchWeeklyTrendingMovies = (): Promise<MovieResult[]> =>
  fetchAndSafeParse(
    endpoint.movie.trending.week,
    undefined,
    movieResultSchema.array(),
  )

/**
 * Gets a list of trending movies from TMDB today.
 *
 * @returns {Promise<MovieResult[]>} - An array of trending movie results.
 */
export const fetchDailyTrendingMovies = (): Promise<MovieResult[]> =>
  fetchAndSafeParse(
    endpoint.movie.trending.day,
    undefined,
    movieResultSchema.array(),
  )
