'use client'

import PageContainer from '@/components/navigation/page-container'
import Wrapper from '@/components/navigation/wrapper'
import { Skeleton } from '@/components/ui/skeleton'

const MediaDetailsSkeleton = () => {
  return (
    <Wrapper className={`sm:px-4 sm:py-8`}>
      <PageContainer className=" flex flex-col">
        <Skeleton className={`flex w-full h-full grow border sm:rounded-xl`} />
      </PageContainer>
    </Wrapper>
  )
}

export default MediaDetailsSkeleton
