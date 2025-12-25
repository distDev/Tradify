//  @ts-expect-error small library
import ColorThief from 'colorthief'
import { useEffect, useState } from 'react'

export function useDominantColor(imageUrl: string): { color: string | null } {
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    if (!imageUrl)
      return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imageUrl

    img.onload = () => {
      const thief = new ColorThief()
      const [r, g, b] = thief.getColor(img)
      setColor(`rgb(${r}, ${g}, ${b})`)
    }
  }, [imageUrl])

  return { color }
}
