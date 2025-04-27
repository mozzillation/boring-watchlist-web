import { getMovieDetails } from '@/lib/tmdb/functions'

const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
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
