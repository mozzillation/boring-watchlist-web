'use client'

import { Input } from '@/components/ui/input'
import { useMultiSearch } from '@/lib/hooks/api'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { useState } from 'react'

const SearchView = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const { data, isLoading } = useMultiSearch(debouncedQuery ?? undefined)

  return (
    <>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies or shows"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.results.map((item) => {
            switch (item.media_type) {
              case 'movie':
                return (
                  <li key={item.id}>
                    🎬 {item.title} ({item.release_date})
                  </li>
                )

              case 'tv':
                return (
                  <li key={item.id}>
                    📺 {item.name} ({item.first_air_date})
                  </li>
                )

              case 'person':
                return (
                  <li key={item.id}>
                    🧑 {item.name} — Known for {item.known_for_department}
                  </li>
                )

              default:
                return null
            }
          })}
        </ul>
      )}
    </>
  )
}

export default SearchView
