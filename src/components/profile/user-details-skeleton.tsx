'use client'

import { Skeleton } from '../ui/skeleton'

const UserDetailsSkeleton = () => {
  return (
    <header className={`flex items-center gap-4 py-6`}>
      <Skeleton
        className={`w-[92px] aspect-square h-full grow-0 rounded-full`}
      />
    </header>
  )
}

export default UserDetailsSkeleton
