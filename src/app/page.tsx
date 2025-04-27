import { getTrendingMovies } from '@/lib/tmdb/functions'

const HomePage = async () => {
  const trendingMovies = await getTrendingMovies()

  return (
    <div>
      {trendingMovies.map((movie) => (
        <div key={movie.id}>
          <div>ID: {movie.id}</div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage
