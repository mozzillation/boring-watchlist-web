'use client'

import { cn } from '@/lib/utils'

type PageContainerProps = React.PropsWithChildren & React.ComponentProps<'div'>

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        `bg-card sm:shadow-2xl sm:rounded-xl sm:border flex flex-col grow min-h-full overflow-hidden`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default PageContainer
