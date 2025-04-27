import { z } from 'zod'

// === Primitives ===
const zString = z.string()
const zNumber = z.number()
const zNullableString = zString.nullable().default(null)
const zNullableNumber = zNumber.nullable().default(0)
const zBoolean = z.boolean().default(true)
const zId = zNumber.default(0)

// === Reusable Object Schemas ===
const baseEntity = {
    id: zId,
    name: zString,
}

export const genreSchema = z.object(baseEntity)

export const productionCompanySchema = z.object({
    ...baseEntity,
    logo_path: zNullableString,
    origin_country: zString,
})

export const productionCountrySchema = z.object({
    iso_3166_1: zString,
    name: zString,
})

export const spokenLanguageSchema = z.object({
    english_name: zString,
    iso_639_1: zString,
    name: zString,
})

export const collectionSchema = z.object({
    ...baseEntity,
    poster_path: zNullableString,
    backdrop_path: zNullableString,
})

export const createdBySchema = z.object({
    id: zId,
    credit_id: zString,
    name: zString,
    original_name: zString,
    gender: zNumber,
    profile_path: zNullableString,
})

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

export const networkSchema = z.object({
    ...baseEntity,
    logo_path: zNullableString,
    origin_country: zString,
})

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
    video: z.boolean().default(false),
    vote_average: zNumber,
    vote_count: zNumber,
})

// === TV Result Schema ===
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
export const movieSchema = z.object({
    id: zId,
    adult: zBoolean,
    backdrop_path: zNullableString,
    belongs_to_collection: collectionSchema.nullable().default(null),
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
    video: z.boolean().default(false),
    vote_average: zNumber,
    vote_count: zNumber,
})

// === TV Details Schema ===
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
export type Movie = z.infer<typeof movieSchema>
export type MovieResult = z.infer<typeof movieResultSchema>
export type TV = z.infer<typeof tvSchema>
export type TVResult = z.infer<typeof tvResultSchema>
