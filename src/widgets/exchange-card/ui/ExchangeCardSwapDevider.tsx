import { ArrowLeftRight } from 'lucide-react'

export function ExchangeCardSwapDevider() {
  return (
    <div className="flex items-center space-x-4">
      <span className="h-[1px] w-full bg-accent" />

      <div>
        <ArrowLeftRight className="text-accent" />
      </div>

      <span className="h-[1px] w-full bg-accent" />
    </div>
  )
}
