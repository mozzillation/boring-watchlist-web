import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_TMDB_API_URL: z.string().url(),
  TMDB_API_KEY: z.string().min(1),
  NEXT_PUBLIC_INSTANT_APP_ID: z.string().min(1),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  throw new Error(
    `❌ Invalid environment variables: ${parsed.error.flatten().fieldErrors}`,
  )
}

const env = parsed.data

export default env
