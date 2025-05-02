import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'relative bg-background overflow-hidden rounded-md transition-all cursor-pointer z-20 select-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-background focus:outline-none focus:ring-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-zinc-400',
        active: 'text-zinc-800',
      },
      size: {
        default: 'w-16 h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type SidebarButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const SidebarButton: React.FC<SidebarButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="navigation-button"
      className={cn(
        buttonVariants({ variant, size }),
        'before:content-[""] before:block before:absolute before:inset-0 before:rounded-md before:bg-zinc-50 before:opacity-0 before:transition-all before:scale-80 hover:before:opacity-100 hover:before:scale-100 active:scale-90 before:z-10',
        className,
      )}
      {...props}
    >
      <span
        className="relative z-20 flex items-center justify-center w-full h-full"
        tabIndex={-1}
      >
        {children}
      </span>
    </Comp>
  )
}

export default SidebarButton
