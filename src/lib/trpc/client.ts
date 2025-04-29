import { defaultShouldDehydrateQuery, QueryClient } from '@tanstack/react-query'
import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '../../server/api/root'
import { transformer } from './shared'

export const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 1000, // 60 seconds
            },
            dehydrate: {
                serializeData: transformer.serialize,
                shouldDehydrateQuery: (query) =>
                    defaultShouldDehydrateQuery(query) ||
                    query.state.status === 'pending',
            },
            hydrate: {
                deserializeData: transformer.deserialize,
            },
        },
    })
}

export const api = createTRPCReact<AppRouter>({
    abortOnUnmount: true,
})
