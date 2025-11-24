import { Trader } from '@/entities'
import { ExchangeActionsMenu, ToggleFavorite } from '@/features'

interface ExchangeCardHeaderProps {}

const user = {
  name: 'Distcom',
  rating: 3,
  exchangeCount: 8,
  picture: 'https://images.cybersport.ru/images/as-is/plain/64/64263e18-4c69-4384-95ec-35779f989fd9.png',
}

export function ExchangeCardHeader({}: ExchangeCardHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start">
        <Trader
          name={user.name}
          picture={user.picture}
          rating={user.rating}
          exchangeCount={user.exchangeCount}
        />

        <div className="flex text-secondary-foreground">
          <ToggleFavorite />
          <ExchangeActionsMenu />
        </div>
      </div>

      {/* <div>
        <p>Теги</p>
      </div> */}
    </div>
  )
}
