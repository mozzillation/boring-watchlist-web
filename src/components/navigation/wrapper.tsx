'use client'

import { cn } from '@/lib/utils'

type WrapperProps = React.PropsWithChildren & React.ComponentProps<'div'>

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={cn(`w-full sm:max-w-xl m-auto flex min-h-full`, className)}>
      {children}
    </div>
  )
}

export default Wrapper
