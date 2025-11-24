import { gifts } from '../model/data'
import { ExchangeCardFooter } from './ExchangeCardFooter'
import { ExchangeCardGiftsBlock } from './ExchangeCardGiftsBlock'
import { ExchangeCardHeader } from './ExchangeCardHeader'
import { ExchangeCardSwapDevider } from './ExchangeCardSwapDevider'

interface ExchangeCardProps {}

export function ExchangeCard({}: ExchangeCardProps) {
  return (
    <div className="bg-secondary rounded-[12px] p-3">
      <ExchangeCardHeader />

      <div className="space-y-3">
        <ExchangeCardGiftsBlock gifts={gifts} exchangeType="arrive" />
        <ExchangeCardSwapDevider />
        <ExchangeCardGiftsBlock gifts={gifts} exchangeType="send" />
      </div>

      <ExchangeCardFooter />
    </div>
  )
}
