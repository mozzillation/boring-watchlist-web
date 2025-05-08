'use client'

import MediaDetailsHeader from '@/components/media/media-details-header'
import PageContainer from '@/components/navigation/page-container'
import Wrapper from '@/components/navigation/wrapper'
import { TV } from '@/lib/tmdb/schema'
import { formatSeasonCount } from '@/lib/tmdb/utils/helpers'

type TVDetailsViewProps = {
  tv: TV
}

const TVDetailsView: React.FC<TVDetailsViewProps> = ({ tv }) => {
  return (
    <Wrapper className="sm:px-4 sm:py-8">
      <PageContainer>
        <MediaDetailsHeader
          title={tv.name}
          subtitle={formatSeasonCount(tv.number_of_seasons)}
          releaseDate={tv.first_air_date}
          poster={tv.poster_path}
          backdrop={tv.backdrop_path}
        />
      </PageContainer>
    </Wrapper>
  )
}

export default TVDetailsView
