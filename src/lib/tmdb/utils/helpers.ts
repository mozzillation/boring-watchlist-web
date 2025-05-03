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

  console.log(data)
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
