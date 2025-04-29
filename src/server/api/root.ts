import { createTRPCRouter } from './trpc'
import { userRouter } from './routers/user'

export const rootRouter = createTRPCRouter({
    user: userRouter,
    //   auth: authRouter,
    //   post: postRouter,
    //   like: likeRouter,
    //   search: searchRouter,
    //   notification: notificationRouter,
})

export type AppRouter = typeof rootRouter
