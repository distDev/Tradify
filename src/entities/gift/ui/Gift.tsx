import { cn } from '@/lib/utils'
import { useDominantColor } from '@/shared/lib'

interface GiftProps {
  picture: string
  price?: number
  showPrice?: boolean
  className: string
  id?: string
}

export function Gift({ picture, price, showPrice, className, id }: GiftProps) {
  const { color } = useDominantColor(picture)

  return (
    <div className={cn('relative flex items-end justify-center overflow-hidden bg-accent', className)}>
      <img
        src={picture}
        alt={picture}
        className="absolute top-0 left-0 w-full h-full object-cover z-1"
      />

      {showPrice && (
        <div
          className="relative px-2 mb-1.5 rounded-full overflow-hidden z-10"
          style={{ backgroundColor: color || 'transparent' }}
        >
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
          <p className="relative z-14">{price}</p>
        </div>
      )}
    </div>
  )
}
