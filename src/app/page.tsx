import { getTrendingMovies } from '@/lib/tmdb/functions'

const HomePage = async () => {
  const trendingMovies = await getTrendingMovies()

  return <div>{trendingMovies[0].title}</div>
}

export default HomePage
