import { FiltersPanel } from '@/features'
import { ExchangeCard } from '@/widgets'

export function TradePage() {
  return (
    <div className="flex flex-col space-y-4 text-white">
      <FiltersPanel />

      <div className="flex flex-col space-y-4">
        <ExchangeCard />
        <ExchangeCard />
        <ExchangeCard />
      </div>
    </div>

  )
}
