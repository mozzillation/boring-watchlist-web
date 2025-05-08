'use client'

import { buildTMDBImageUrl } from '@/lib/tmdb/utils/helpers'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

type MediaDetailsHeaderProps = {
  title: string
  releaseDate: string
  subtitle?: string | null
  backdrop?: string | null
  poster?: string | null
  tagline?: string | null
}

const MediaDetailsHeader: React.FC<MediaDetailsHeaderProps> = ({
  title,
  releaseDate,
  subtitle,
  backdrop,
  poster,
  tagline,
}) => {
  const [isBackdropLoaded, setBackdropLoaded] = useState(false)
  const [isPosterLoaded, setPosterLoaded] = useState(false)

  const backdropURL = buildTMDBImageUrl(backdrop, 'w154')
  const posterURL = buildTMDBImageUrl(poster, 'w342')

  return (
    <header className={`w-full flex flex-col`}>
      <picture
        className={`relative w-full h-auto bg-muted overflow-hidden pointer-events-none select-none p-4 sm:p-6`}
      >
        {backdropURL && (
          <>
            <Image
              src={backdropURL}
              fill={true}
              alt={title}
              className={cn(
                `absolute inset-0 object-cover transition-all opacity-0`,
                isBackdropLoaded && `opacity-100`,
              )}
              onLoadingComplete={() => setBackdropLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div
              className={`absolute inset-0 backdrop-blur-3xl backdrop-brightness-125`}
            />
          </>
        )}

        <div
          className={`max-w-[33vw] sm:max-w-3xs w-full aspect-[5/7] h-auto relative rounded-md overflow-hidden shadow-2xl bg-black/10 border-white/10 border`}
        >
          {posterURL && (
            <Image
              src={posterURL}
              fill={true}
              alt={title}
              className={cn(
                `object-cover transition-all opacity-0`,
                isPosterLoaded && `opacity-100`,
              )}
              priority
              onLoadingComplete={() => setPosterLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </picture>
      <div className={`py-4 px-4 sm:px-6 space-y-4`}>
        <div className={`flex flex-col gap-4`}>
          <div className={`flex flex-col gap-1`}>
            <div
              className={`w-full flex flex-row flex-wrap gap-2 text-sm text-muted-foreground`}
            >
              <div>{new Date(releaseDate).getFullYear().toString()}</div>
              {subtitle && <div>{subtitle}</div>}
            </div>
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-balance">
              {title}
            </h1>

            {tagline && (
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-secondary-foreground">
                {tagline}
              </h2>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default MediaDetailsHeader
