'use client'

import PageContainer from '@/components/navigation/page-container'
import { TV } from '@/lib/tmdb/schema'
import { buildTMDBImageUrl, formatSeasonCount } from '@/lib/tmdb/utils/helpers'
import Image from 'next/image'

type TVDetailsViewProps = {
  tv: TV
}

const TVDetailsView: React.FC<TVDetailsViewProps> = ({ tv }) => {
  const backdrop = buildTMDBImageUrl(tv.backdrop_path, 'w154')
  const poster = buildTMDBImageUrl(tv.poster_path, 'w342')

  // const { data: credits, isLoading, isError } = useMovieCredits(movie.id)

  return (
    <PageContainer className="sm:px-4 sm:py-8">
      <div className="bg-card sm:shadow-2xl sm:rounded-xl sm:border flex flex-col grow min-h-full overflow-hidden">
        <picture
          className={`relative w-full h-auto bg-muted overflow-hidden pointer-events-none select-none py-6 px-4 sm:px-6`}
        >
          {backdrop && (
            <Image
              src={backdrop}
              fill={true}
              alt={tv.name}
              className={`blur-3xl absolute inset-0 object-cover`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          <div
            className={`max-w-3xs w-full aspect-[5/7] h-auto relative rounded overflow-hidden shadow-2xl bg-black/10`}
          >
            {poster && (
              <Image
                src={poster}
                fill={true}
                alt={tv.name}
                className={`object-cover`}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        </picture>
        <div className={`py-4 px-4 sm:px-6`}>
          <header className={`flex flex-col gap-1`}>
            <div
              className={`w-full flex flex-row flex-wrap gap-2 text-sm text-muted-foreground`}
            >
              <div>{new Date(tv.first_air_date).getFullYear().toString()}</div>
              <div>{formatSeasonCount(tv.number_of_seasons)}</div>
            </div>
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-balance">
              {tv.name}
            </h1>
            {/* {tv. && (
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-secondary-foreground">
                {movie.tagline}
              </h2>
            )} */}
          </header>
          <main>
            {tv.overview && (
              <div className={`text-secondary-foreground text-balance text-sm`}>
                {tv.overview}
              </div>
            )}
          </main>

          {/* <footer className={`text-sm`}>
            <div className={`flex flex-col gap-1`}>
              <div className={`text-muted-foreground`}>Cast</div>
              <div>
                {credits?.cast.map((person, index) => (
                  <span key={person.id}>
                    <Link
                      href={`/person/${person.id}`}
                      className={`hover:text-primary hover:underline transition-all`}
                    >
                      {person.name}
                    </Link>
                    {index < credits.cast.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </footer> */}
        </div>
      </div>
    </PageContainer>
  )
}

export default TVDetailsView
