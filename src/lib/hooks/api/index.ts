import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { MovieCredits, MultiSearchResult } from '../../tmdb/schema'
import { performMultiSearch } from '../../tmdb/queries/search'
import { fetchMovieCreditsByID } from '@/lib/tmdb/queries/movie'

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

export const useMovieCredits = (id: number) => {
  return useQuery<MovieCredits>({
    queryKey: ['movie-credits', id],
    queryFn: async () => fetchMovieCreditsByID(id),
    staleTime: Infinity,
    enabled: !!id,
  })
}
