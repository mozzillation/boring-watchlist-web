import { fetchMovieByID } from '@/lib/tmdb/queries/movie'

type Params = Promise<{
  id: string
}>

type MovieDetailPageProps = {
  params: Params
}

const MovieDetailPage: React.FC<MovieDetailPageProps> = async ({ params }) => {
  const { id } = await params

  const parsedID = parseInt(id)
  const movie = await fetchMovieByID(parsedID)

  return (
    <div>
      <div>Title: {movie.title}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Description: {movie.overview}</div>
    </div>
  )
}

export default MovieDetailPage
