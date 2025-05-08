'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './client'

const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ContextProvider
