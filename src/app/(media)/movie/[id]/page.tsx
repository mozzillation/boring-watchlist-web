import { getMovieDetails } from '@/lib/tmdb/functions'

const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const movieId = parseInt(id)

  if (isNaN(movieId)) {
    return <div>Invalid Movie ID</div>
  }

  // Fetch movie details using the TMDB API
  const movieDetails = await getMovieDetails(movieId)

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
    </div>
  )
}

export default MovieDetailsPage

export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every 60 seconds
export const fetchCache = 'force-no-store'
export const runtime = 'edge' // Use edge runtime for faster response times
export const preferredRegion = 'auto' // Automatically select the best region for the user
export const runtimeCache = 'force-cache' // Cache the response for faster loading
export const fetchCacheKey = 'movie-details' // Cache key for the movie details
export const fetchCacheDuration = 60 // Cache duration in seconds
export const fetchCacheMaxAge = 60 // Maximum age for the cache in seconds
export const fetchCacheStaleWhileRevalidate = 60 // Stale-while-revalidate duration in seconds
export const fetchCacheStaleIfError = 60 // Stale-if-error duration in seconds
export const fetchCacheStaleIfErrorMaxAge = 60 // Maximum age for stale-if-error in seconds
export const fetchCacheStaleIfErrorStaleWhileRevalidate = 60 // Stale-while-revalidate duration for stale-if-error in seconds
