import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
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

export const useInfiniteMultiSearch = (query: string) => {
  return useInfiniteQuery<MultiSearchResult>({
    queryKey: ['multi-search', query],
    queryFn: async ({ pageParam = 1 }) =>
      performMultiSearch({ query, page: pageParam }),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!query,
    initialPageParam: 1,
    getNextPageParam: ({ page, total_pages }) =>
      page < total_pages ? page++ : undefined,
  })
}
