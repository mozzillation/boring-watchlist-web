import { fetchTVShowByID } from '@/lib/tmdb/queries/tv'

type Params = Promise<{
  id: string
}>

type TVShowDetailPageProps = {
  params: Params
}

const TVShowDetailPage: React.FC<TVShowDetailPageProps> = async ({
  params,
}) => {
  const { id } = await params

  const parsedID = parseInt(id)
  const tv = await fetchTVShowByID(parsedID)

  return (
    <div>
      <div>Title: {tv.original_name}</div>
      <div># of seasons: {tv.number_of_seasons}</div>
      <div>Description: {tv.overview}</div>
    </div>
  )
}

export default TVShowDetailPage
