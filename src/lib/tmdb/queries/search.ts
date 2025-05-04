import endpoint from '../endpoints'
import { MultiSearchResult, searchMultiResponseSchema } from '../schema'
import { fetchAndSafeParse } from '../utils/helpers'

export const performMultiSearch = ({
  query,
  include_adult = false,
  language = 'en-US',
  page = 1,
}: {
  query: string
  include_adult?: boolean
  language?: string
  page?: number | unknown
}): Promise<MultiSearchResult> =>
  fetchAndSafeParse(
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
