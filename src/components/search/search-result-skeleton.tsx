'use client'

import { Skeleton } from '../ui/skeleton'

const SearchResultSkeleton: React.FC = () => {
  return (
    <article className={`w-full flex flex-row gap-2`}>
      <Skeleton
        className={`relative aspect-[5/7] bg-muted max-w-14 w-full h-full rounded overflow-hidden`}
      />

      <div className={`w-full gap-1 flex flex-col`}>
        <div className={`h-6 flex flex-row items-center content-center`}>
          <Skeleton className={`h-4 py-1 w-20 rounded-sm`} />
        </div>
      </div>
    </article>
  )
}

export default SearchResultSkeleton
