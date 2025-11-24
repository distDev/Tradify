import { useTonConnectUI } from '@tonconnect/ui-react'
import { WalletMinimal } from 'lucide-react'

import { UIButton } from '@/shared/ui'

export function Header() {
  const [tonConnectUI] = useTonConnectUI()

  return (
    <header className="px-[15px] py-[20px] flex justify-end">
      <UIButton onClick={() => tonConnectUI.openModal()} variant="default">
        <WalletMinimal />
        Подключить кошелек
      </UIButton>

    </header>
  )
}
