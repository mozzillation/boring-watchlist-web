import endpoint from '../endpoints'
import {
  MediaType,
  MultiSearchResult,
  searchMultiResponseSchema,
} from '../schema'
import { fetchAndSafeParse } from '../utils/helpers'

type performMultiSearchProps = {
  query: string
  include_adult?: boolean
  language?: string
  page?: number | unknown
  exclude_media_types?: MediaType | MediaType[]
}

export const performMultiSearch = async ({
  query,
  include_adult = false,
  language = 'en-US',
  page = 1,
  exclude_media_types,
}: performMultiSearchProps): Promise<MultiSearchResult> => {
  const results = await fetchAndSafeParse(
    endpoint.search.multi,
    {
      params: {
        query,
        include_adult,
        language,
        page,
      },
    },
    searchMultiResponseSchema,
    'Multi Search',
  )

  // Normalize to array
  const excludedTypes = Array.isArray(exclude_media_types)
    ? exclude_media_types
    : exclude_media_types
      ? [exclude_media_types]
      : []

  // Filter results
  const filteredResults = results.results.filter(
    (item) => !excludedTypes.includes(item.media_type),
  )

  return {
    ...results,
    results: filteredResults,
    total_results: filteredResults.length,
  }
}
