'use client'

import { cn } from '@/lib/utils'

type PageContainerProps = React.PropsWithChildren & React.ComponentProps<'div'>

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(`max-w-xl m-auto flex min-h-screen`, className)}>
      {children}
    </div>
  )
}

export default PageContainer
