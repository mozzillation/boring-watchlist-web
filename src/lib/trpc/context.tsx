'use client'
// ^-- to make sure we can mount the Provider from a server component
import type { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCContext } from '@trpc/tanstack-react-query'
import { useState } from 'react'
import { getUrl, transformer } from './shared'
import { AppRouter } from '@/server/api/root'
import { makeQueryClient } from './client'

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>()

let browserQueryClient: QueryClient

const getQueryClient = () => {
    if (typeof window === 'undefined') {
        // Server: always make a new query client
        return makeQueryClient()
    }
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
}

export const TRPCReactProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    const queryClient = getQueryClient()
    const [trpcClient] = useState(() =>
        createTRPCClient<AppRouter>({
            links: [
                httpBatchLink({
                    transformer,
                    url: getUrl(),
                }),
            ],
        }),
    )
    return (
        <QueryClientProvider client={queryClient}>
            <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
                {children}
            </TRPCProvider>
        </QueryClientProvider>
    )
}
