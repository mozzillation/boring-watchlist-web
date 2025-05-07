import { fetchMovieByID, fetchMovieCreditsByID } from '@/lib/tmdb/queries/movie'
import MovieDetailsView from '@/views/movie-details-view'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = Promise<{
  id: string
}>

type MovieDetailsPageProps = {
  params: Params
}

export const generateMetadata = async ({
  params,
}: MovieDetailsPageProps): Promise<Metadata> => {
  const { id } = await params

  const parsedID = parseInt(id)
  const movie = await fetchMovieByID(parsedID)

  return {
    title: movie.title,
    description: movie.overview,
  }
}

export const dynamic = 'force-dynamic'

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = async ({
  params,
}) => {
  const { id } = await params

  const parsedID = parseInt(id)
  const movie = await fetchMovieByID(parsedID)
  const credits = await fetchMovieCreditsByID(parsedID)

  console.log(credits)

  if (!movie) notFound()

  return <MovieDetailsView movie={movie} />
}

export default MovieDetailsPage
