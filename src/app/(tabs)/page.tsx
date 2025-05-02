import { fetchMovieByID } from '@/lib/tmdb/queries/movie'

const Home = async () => {
  const movie = await fetchMovieByID(8888)

  return (
    <div>
      {movie.id} {movie.title}
    </div>
  )
}

export default Home
