import { fetchTVShowByID } from '@/lib/tmdb/queries/tv'
import TVDetailsView from '@/views/tv-details-view'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = Promise<{
  id: string
}>

type TVDetailsPageProps = {
  params: Params
}

export const generateMetadata = async ({
  params,
}: TVDetailsPageProps): Promise<Metadata> => {
  const { id } = await params

  const parsedID = parseInt(id)
  const tv = await fetchTVShowByID(parsedID)

  return {
    title: tv.name,
    description: tv.overview,
  }
}

export const dynamic = 'force-dynamic'

const TVDetailsPage: React.FC<TVDetailsPageProps> = async ({ params }) => {
  const { id } = await params

  const parsedID = parseInt(id)
  const movie = await fetchTVShowByID(parsedID)

  if (!movie) notFound()

  return <TVDetailsView tv={movie} />
}

export default TVDetailsPage
