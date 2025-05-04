'use client'

import PageContainer from '@/components/navigation/page-container'
import SearchBox from '@/components/search/search-box'
import SearchEmptyState from '@/components/search/search-empty-state'
import SearchResult from '@/components/search/search-result'
import SearchResultSkeleton from '@/components/search/search-result-skeleton'
import { useMultiSearch } from '@/lib/hooks/api'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { buildTMDBImageUrl } from '@/lib/tmdb/utils/helpers'
import Link from 'next/link'
import { useRef, useState } from 'react'

const SearchView = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur() // This will close the keyboard on mobile
    }
  }

  const { data, isLoading } = useMultiSearch(debouncedQuery ?? undefined)

  return (
    <PageContainer className={`sm:px-4 sm:py-8`}>
      <div
        className={`bg-card p-4 sm:p-6 sm:shadow-2xl sm:rounded-xl sm:border gap-4 flex flex-col grow min-h-full`}
      >
        <SearchBox
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          placeholder="Search movies or shows"
        />

        {isLoading ? (
          <div className={`w-full flex flex-col shrink gap-4`}>
            <h2
              className={`font-semibold text-sm text-muted-foreground animate-pulse`}
            >
              Loading...
            </h2>
            {[...Array(9)].map((item, index) => (
              <SearchResultSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className={`w-full flex flex-col shrink gap-4`}>
            {data?.results && (
              <>
                <h2 className={`font-semibold text-sm text-muted-foreground`}>
                  Results
                </h2>

                {data.results.length === 0 && <SearchEmptyState />}

                {data?.results.map((item) => {
                  switch (item.media_type) {
                    case 'movie':
                      return (
                        <Link href={`/movie/${item.id}`} passHref key={item.id}>
                          <SearchResult
                            type={'Movie'}
                            heading={item.title}
                            subtitle={`${item.release_date && new Date(item.release_date).getFullYear()}`}
                            image={buildTMDBImageUrl(item.poster_path)}
                          />
                        </Link>
                      )

                    case 'tv':
                      return (
                        <Link href={`/tv/${item.id}`} passHref key={item.id}>
                          <SearchResult
                            type={'TV Show'}
                            heading={item.name}
                            image={buildTMDBImageUrl(item.poster_path)}
                          />
                        </Link>
                      )

                    case 'person':
                      return (
                        <SearchResult
                          key={item.id}
                          type={'People'}
                          heading={item.name}
                          image={buildTMDBImageUrl(item.profile_path)}
                        >
                          {/* 🧑  — Known for {item.known_for_department} */}
                        </SearchResult>
                      )

                    default:
                      return null
                  }
                })}
              </>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  )
}

export default SearchView
