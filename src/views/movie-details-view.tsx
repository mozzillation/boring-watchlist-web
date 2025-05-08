'use client'

import MediaDetailsHeader from '@/components/media/media-details-header'
import PageContainer from '@/components/navigation/page-container'
import Wrapper from '@/components/navigation/wrapper'
import { Movie } from '@/lib/tmdb/schema'
import { formatRuntime } from '@/lib/tmdb/utils/helpers'

type MovieDetailsViewProps = {
  movie: Movie
}

const MovieDetailsView: React.FC<MovieDetailsViewProps> = ({ movie }) => {
  return (
    <Wrapper className="sm:px-4 sm:py-8">
      <PageContainer>
        <MediaDetailsHeader
          title={movie.title}
          subtitle={formatRuntime(movie.runtime)}
          releaseDate={movie.release_date}
          poster={movie.poster_path}
          backdrop={movie.backdrop_path}
          tagline={movie.tagline}
        />
      </PageContainer>
    </Wrapper>
  )
}

export default MovieDetailsView
