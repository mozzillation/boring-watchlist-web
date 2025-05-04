'use client'

import PageContainer from '@/components/navigation/page-container'
import SearchBox from '@/components/search/search-box'
import SearchEmptyState from '@/components/search/search-empty-state'
import SearchResult from '@/components/search/search-result'
import SearchResultSkeleton from '@/components/search/search-result-skeleton'
import { useInfiniteMultiSearch } from '@/lib/hooks/api'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { buildTMDBImageUrl } from '@/lib/tmdb/utils/helpers'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'

const SearchView = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteMultiSearch(debouncedQuery ?? '')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') inputRef.current?.blur()
  }

  // Infinite scroll: Observe the "loadMoreRef" to trigger next page
  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchNextPage()
      },
      { threshold: 1 },
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, fetchNextPage])

  const hasResults = data?.pages.some((page) => page.results.length > 0)

  return (
    <PageContainer className="sm:px-4 sm:py-8">
      <div className="bg-card p-4 sm:p-6 sm:shadow-2xl sm:rounded-xl sm:border gap-4 flex flex-col grow min-h-full">
        <SearchBox
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          placeholder="Search movies or shows"
        />

        {isLoading ? (
          <div className="w-full flex flex-col shrink gap-4">
            <h2 className="font-semibold text-sm text-muted-foreground animate-pulse">
              Loading...
            </h2>
            {Array.from({ length: 9 }).map((_, i) => (
              <SearchResultSkeleton key={i} />
            ))}
          </div>
        ) : debouncedQuery && !hasResults ? (
          <SearchEmptyState />
        ) : (
          <div className="w-full flex flex-col shrink gap-4">
            {debouncedQuery && (
              <h2 className="font-semibold text-sm text-muted-foreground">
                Results
              </h2>
            )}

            {data?.pages.map((page, pageIndex) => (
              <Fragment key={pageIndex}>
                {page.results.map((item) => {
                  switch (item.media_type) {
                    case 'movie':
                      return (
                        <Link href={`/movie/${item.id}`} passHref key={item.id}>
                          <SearchResult
                            type="Movie"
                            heading={item.title}
                            image={buildTMDBImageUrl(item.poster_path)}
                            subtitle={
                              item.release_date &&
                              new Date(item.release_date)
                                .getFullYear()
                                .toString()
                            }
                          />
                        </Link>
                      )
                    case 'tv':
                      return (
                        <Link href={`/tv/${item.id}`} passHref key={item.id}>
                          <SearchResult
                            type="TV Show"
                            heading={item.name}
                            image={buildTMDBImageUrl(item.poster_path)}
                          />
                        </Link>
                      )
                    case 'person':
                      return (
                        <SearchResult
                          key={item.id}
                          type="People"
                          heading={item.name}
                          image={buildTMDBImageUrl(item.profile_path)}
                        />
                      )
                    default:
                      return null
                  }
                })}
              </Fragment>
            ))}

            {isFetchingNextPage && (
              <div className="flex flex-col gap-4 mt-4">
                {[...Array(3)].map((_, i) => (
                  <SearchResultSkeleton key={`loading-more-${i}`} />
                ))}
              </div>
            )}

            {/* Sentinel element to trigger loading next page */}
            <div ref={loadMoreRef} className="h-1" />
          </div>
        )}
      </div>
    </PageContainer>
  )
}

export default SearchView
