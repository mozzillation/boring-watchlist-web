import { useQuery } from '@tanstack/react-query'
import { MultiSearchResult } from '../../tmdb/schema'
import { performMultiSearch } from '../../tmdb/queries/search'

export const useMultiSearch = (query: string) => {
  return useQuery<MultiSearchResult>({
    queryKey: ['multi-search', query],
    queryFn: async () => performMultiSearch({ query }),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!query,
  })
}
