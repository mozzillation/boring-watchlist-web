import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { TRPCError } from '@trpc/server'

export const userRouter = createTRPCRouter({
    info: publicProcedure
        .input(
            z.object({
                username: z.string(),
            }),
        )
        .query(async ({ input }) => {
            if (!input.username) {
                throw new TRPCError({ code: 'NOT_FOUND' })
            }

            const user = {
                username: input.username,
                name: 'John Doe',
                bio: undefined,
                avatarUrl: 'https://example.com/avatar.jpg',
            }

            if (!user) {
                throw new TRPCError({ code: 'NOT_FOUND' })
            }

            return user
        }),
})
