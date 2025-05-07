'use client'

import PageContainer from '@/components/navigation/page-container'
import { Skeleton } from '@/components/ui/skeleton'

const MediaDetailsSkeleton = () => {
  return (
    <PageContainer className="sm:px-4 sm:py-8 flex flex-col">
      <Skeleton className={`flex w-full h-full grow border sm:rounded-xl`} />
    </PageContainer>
  )
}

export default MediaDetailsSkeleton
