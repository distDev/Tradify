import { Heart } from 'lucide-react'
import { useState } from 'react'

import { UIButton } from '@/shared/ui'

interface ToggleFavoriteProps {}

export function ToggleFavorite({}: ToggleFavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev)
  }

  return (
    <UIButton variant="ghost" size="icon" onClick={handleToggleFavorite}>
      <Heart fill={isFavorite ? 'red' : 'none'} />
    </UIButton>
  )
}
