import { ZodSchema } from 'zod'
import tmdb from '..'
import { AxiosRequestConfig } from 'axios'

/**
 * Fetches data from TMDB and validates it using a Zod schema.
 *
 * @template T - The inferred return type from the schema.
 * @param {string} url - TMDB API endpoint.
 * @param {ZodSchema<T>} schema - Zod schema to validate the response.
 * @param {string} [errorContext] - Optional label for debugging errors.
 * @returns {Promise<T>} - Validated data from TMDB.
 * @throws {Error} - If the request fails or validation fails.
 */
export const fetchAndSafeParse = async <T>(
  url: string,
  config: AxiosRequestConfig<unknown> | undefined,
  schema: ZodSchema<T>,
  errorContext: string = 'TMDB',
): Promise<T> => {
  const { data } = await tmdb.get(url, config)

  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    console.error(
      `[${errorContext} ERROR] Invalid response from ${url}`,
      parsed.error.format(),
    )
    throw new Error(`Invalid data from ${errorContext} at ${url}`)
  }

  return parsed.data
}

type TMDBImageSize =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'

export const buildTMDBImageUrl = (
  path: string | null | undefined,
  size: TMDBImageSize = 'w500',
): string | null => {
  if (!path) return null
  return `${TMDB_IMAGE_BASE_URL}${size}${path}`
}

export const formatRuntime = (minutes: number): string => {
  if (!Number.isFinite(minutes) || minutes <= 0) return 'N/A'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours > 0 && mins > 0) return `${hours}h ${mins}min`
  if (hours > 0) return `${hours}h`
  return `${mins}min`
}

export const formatSeasonCount = (count: number): string => {
  if (!Number.isFinite(count) || count <= 0) return 'No seasons'
  return `${count} season${count === 1 ? '' : 's'}`
}
