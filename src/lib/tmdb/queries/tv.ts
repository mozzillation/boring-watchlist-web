import endpoint from '../endpoints'
import { TV, TVResult, tvResultSchema, tvSchema } from '../schema'
import { fetchAndSafeParse } from '../utils/helpers'

/**
 * Gets detailed information about a specific TV show by its ID.
 *
 * @param {number} id - The TMDB TV show ID.
 * @returns {Promise<TV>} - Detailed movie data.
 * @throws Will throw if the movie data is invalid or the request fails.
 */
export const fetchTVShowByID = (id: number): Promise<TV> =>
  fetchAndSafeParse(endpoint.tv.id(id), undefined, tvSchema, 'TV')

/**
 * Gets a list of trending TV shows from TMDB this week.
 *
 * @returns {Promise<MovieResult[]>} - An array of trending tv show results.
 */
export const fetchWeeklyTrendingTVShows = (): Promise<TVResult[]> =>
  fetchAndSafeParse(
    endpoint.tv.trending.week,
    undefined,
    tvResultSchema.array(),
    'Weekly Trending TV',
  )

/**
 * Gets a list of trending TV shows from TMDB today.
 *
 * @returns {Promise<MovieResult[]>} - An array of trending tv show results.
 */
export const fetchDailyTrendingTVShows = (): Promise<TVResult[]> =>
  fetchAndSafeParse(
    endpoint.tv.trending.day,
    undefined,
    tvResultSchema.array(),
    'Daily Trending TV',
  )
