import { useTonConnectUI } from '@tonconnect/ui-react'
import { WalletMinimal } from 'lucide-react'

import { Button } from '@/shared'

export function Header() {
  const [tonConnectUI] = useTonConnectUI()

  return (
    <header className="px-[15px] py-[20px] flex justify-end">
      <Button onClick={() => tonConnectUI.openModal()}>
        <WalletMinimal />
        Подключить кошелек
      </Button>
    </header>
  )
}
