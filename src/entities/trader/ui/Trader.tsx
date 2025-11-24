import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'

interface TraderProps {
  name: string
  exchangeCount: number
  rating: number
  picture: string
}

function getRatingColor(rating: number) {
  if (rating >= 4.5)
    return 'text-green-400 fill-green-400'
  if (rating >= 3.0)
    return 'text-yellow-400 fill-yellow-400'
  return 'text-red-400'
}

export function Trader({ name, exchangeCount, rating, picture }: TraderProps) {
  const currentRatingColor = getRatingColor(rating)

  return (
    <div className="flex space-x-2">
      <img
        src={picture}
        alt={name}
        className="h-[40px] w-[40px] rounded-full object-cover"
      />

      <div className="flex flex-col text-white">
        <p>{name}</p>

        <div className="flex space-x-1">
          <span className="flex items-center gap-1 text-secondary-foreground">
            <span>{exchangeCount}</span>
            <span>обменов</span>
          </span>

          <p className="text-secondary-foreground">|</p>

          <span className={cn('flex items-center gap-1', currentRatingColor)}>
            <Star height="14px" width="14px" fill={currentRatingColor} />
            <span>{rating}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
