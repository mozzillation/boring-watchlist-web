import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_TMDB_API_URL: z.string().url(),
  TMDB_API_KEY: z.string().min(1),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,
  )
  throw new Error('Invalid environment variables')
}

const env = parsed.data

export default env
