import { Gift } from '@/entities'

interface ExchangeCardGiftsListProps {
  gifts: {
    price: number
    picture: string
    id: string
  }[]
}

export function ExchangeCardGiftsList({ gifts }: ExchangeCardGiftsListProps) {
  return (
    <>
      {
        gifts.map(gift => (
          <Gift
            key={gift.id}
            picture={gift.picture}
            price={gift.price}
            showPrice
            className="h-[87px] rounded-[10px]"
          />
        ))
      }
    </>
  )
}
