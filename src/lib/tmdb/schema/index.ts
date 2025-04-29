import { z } from 'zod'

// === Primitives ===

/** A required string */
const zString = z.string()

/** A required number */
const zNumber = z.number()

/** An optional string (nullable) with default `null` */
const zNullableString = zString.nullable()

/** An optional number (nullable) with default `0` */
const zNullableNumber = zNumber.nullable()

/** A boolean with default `true` */
const zBoolean = z.boolean()

/** A numeric ID with default `0` */
const zId = zNumber

// === Reusable Object Schemas ===

/** Basic reusable entity with `id` and `name` */
const baseEntity = {
  id: zId,
  name: zString,
}

/** TMDB Genre schema */
export const genreSchema = z.object(baseEntity)

/** TMDB Production Company schema */
export const productionCompanySchema = z.object({
  ...baseEntity,
  logo_path: zNullableString,
  origin_country: zString,
})

/** TMDB Production Country schema */
export const productionCountrySchema = z.object({
  iso_3166_1: zString,
  name: zString,
})

/** TMDB Spoken Language schema */
export const spokenLanguageSchema = z.object({
  english_name: zString,
  iso_639_1: zString,
  name: zString,
})

/** TMDB Collection schema */
export const collectionSchema = z.object({
  ...baseEntity,
  poster_path: zNullableString,
  backdrop_path: zNullableString,
})

/** TMDB Created By (TV) schema */
export const createdBySchema = z.object({
  id: zId,
  credit_id: zString,
  name: zString,
  original_name: zString,
  gender: zNumber,
  profile_path: zNullableString,
})

/** TMDB Episode schema */
export const episodeSchema = z.object({
  id: zId,
  name: zString,
  overview: zString,
  vote_average: zNumber,
  vote_count: zNumber,
  air_date: zString,
  episode_number: zNumber,
  episode_type: zString,
  production_code: zString,
  runtime: zNullableNumber,
  season_number: zNumber,
  show_id: zNumber,
  still_path: zNullableString,
})

/** TMDB Network schema */
export const networkSchema = z.object({
  ...baseEntity,
  logo_path: zNullableString,
  origin_country: zString,
})

/** TMDB Season schema */
export const seasonSchema = z.object({
  air_date: zNullableString,
  episode_count: zNumber,
  id: zId,
  name: zString,
  overview: zString,
  poster_path: zNullableString,
  season_number: zNumber,
  vote_average: zNumber,
})

// === Movie Result Schema ===

/** Schema for TMDB Movie result in lists like Trending or Discover */
export const movieResultSchema = z.object({
  id: zId,
  adult: zBoolean,
  backdrop_path: zNullableString,
  genre_ids: z.array(zId),
  media_type: z.literal('movie'),
  original_language: zString,
  original_title: zString,
  overview: zString,
  popularity: zNumber,
  poster_path: zNullableString,
  release_date: zString,
  title: zString,
  video: z.boolean(),
  vote_average: zNumber,
  vote_count: zNumber,
})

// === TV Result Schema ===

/** Schema for TMDB TV result in lists like Trending or Discover */
export const tvResultSchema = z.object({
  id: zId,
  adult: zBoolean,
  backdrop_path: zNullableString,
  genre_ids: z.array(zId),
  media_type: z.literal('tv'),
  original_language: zString,
  original_title: zNullableString,
  name: zString,
  overview: zString,
  popularity: zNumber,
  poster_path: zNullableString,
  first_air_date: zString,
  vote_average: zNumber,
  vote_count: zNumber,
  origin_country: z.array(zString),
})

// === Movie Details Schema ===

/** Full Movie detail schema returned by TMDB `/movie/:id` */
export const movieSchema = z.object({
  id: zId,
  adult: zBoolean,
  backdrop_path: zNullableString,
  belongs_to_collection: collectionSchema.nullable(),
  budget: zNumber,
  genres: z.array(genreSchema),
  homepage: zNullableString,
  imdb_id: zNullableString,
  original_language: zString,
  original_title: zString,
  overview: zNullableString,
  popularity: zNumber,
  poster_path: zNullableString,
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  release_date: zString,
  revenue: zNumber,
  runtime: zNumber,
  spoken_languages: z.array(spokenLanguageSchema),
  status: zString,
  tagline: zNullableString,
  title: zString,
  video: z.boolean(),
  vote_average: zNumber,
  vote_count: zNumber,
})

// === TV Details Schema ===

/** Full TV show detail schema returned by TMDB `/tv/:id` */
export const tvSchema = z.object({
  id: zId,
  adult: zBoolean,
  backdrop_path: zNullableString,
  created_by: z.array(createdBySchema),
  episode_run_time: z.array(zNumber),
  first_air_date: zString,
  genres: z.array(genreSchema),
  homepage: zString,
  in_production: zBoolean,
  languages: z.array(zString),
  last_air_date: zNullableString,
  last_episode_to_air: episodeSchema.nullable(),
  name: zString,
  next_episode_to_air: episodeSchema.nullable(),
  networks: z.array(networkSchema),
  number_of_episodes: zNumber,
  number_of_seasons: zNumber,
  origin_country: z.array(zString),
  original_language: zString,
  original_name: zString,
  overview: zString,
  popularity: zNumber,
  poster_path: zNullableString,
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  seasons: z.array(seasonSchema),
})

// === Types ===

/** TypeScript type for full Movie details */
export type Movie = z.infer<typeof movieSchema>

/** TypeScript type for a Movie list item (e.g. trending) */
export type MovieResult = z.infer<typeof movieResultSchema>

/** TypeScript type for full TV show details */
export type TV = z.infer<typeof tvSchema>

/** TypeScript type for a TV list item (e.g. trending) */
export type TVResult = z.infer<typeof tvResultSchema>
