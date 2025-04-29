import { type NextRequest } from 'next/server'
import { createTRPCContext } from '@/server/api/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { rootRouter } from '@/server/api/root'

const handler = (req: NextRequest) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: rootRouter,
        createContext: createTRPCContext,
        onError:
            process.env.NODE_ENV === 'development'
                ? ({ path, error }) => {
                      console.error(
                          `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
                      )
                  }
                : undefined,
    })

export { handler as GET, handler as POST }
