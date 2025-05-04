import Image from 'next/image'
import { Badge } from '../ui/badge'

type SearchResultProps = {
  type: string
  heading: string
  subtitle?: string | null
  image?: string | null
}

const SearchResult: React.FC<SearchResultProps> = ({
  type,
  heading,
  subtitle,
  image,
}) => {
  return (
    <article className={`w-full flex flex-row gap-2 group ring-offset-2`}>
      <div
        className={`relative aspect-[5/7] bg-muted max-w-14 w-full h-full rounded overflow-hidden border`}
      >
        {image && (
          <Image
            src={image}
            alt={heading}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover`}
          />
        )}
      </div>

      <div className={`w-full gap-1 flex flex-col`}>
        <div className={`font-semibold transition-all group-hover:underline`}>
          {heading}
        </div>
        <div
          className={`flex flex-row gap-1 items-center content-center w-full`}
        >
          <Badge variant="outline">{type}</Badge>
          {subtitle && (
            <div className={`text-muted-foreground text-xs`}>{subtitle}</div>
          )}
        </div>
      </div>
    </article>
  )
}

export default SearchResult
