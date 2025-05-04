import { cn } from '@/lib/utils'
import { LucideIcon, Search } from 'lucide-react'
import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: LucideIcon
}

const SearchBox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, endIcon, ...props }, ref) => {
    const EndIcon = endIcon

    return (
      <div className="w-full relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Search size={16} className="text-muted-foreground" />
        </div>

        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-md border border-input bg-card hover:bg-background focus-visible:bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/10 outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-9 transition-all shadow',
            endIcon ? 'pr-8' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <EndIcon className="text-muted-foreground" size={18} />
          </div>
        )}
      </div>
    )
  },
)

SearchBox.displayName = 'SearchBox'

export default SearchBox
