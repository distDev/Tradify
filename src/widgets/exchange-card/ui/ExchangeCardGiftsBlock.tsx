import { ArrowDown, ArrowUp, Gift } from 'lucide-react'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import { ExchangeCardGiftsList } from './ExchangeCardGiftsList'
import { ExchangeCardToggleGiftsButton } from './ExchangeCardToggleGiftsButton'

interface GiftsBlockProps {
  gifts: {
    picture: string
    price: number
    id: string
  }[]
  exchangeType: 'arrive' | 'send'
}

const exchangeTypeMap = {
  arrive: {
    label: 'Вы получите',
    icon: <ArrowUp className="text-green-400" height={16} width={16} />,
    iconBg: 'bg-green-400/30',
  },
  send: {
    label: 'Вы отдадите',
    icon: <ArrowDown className="text-red-400" height={16} width={16} />,
    iconBg: 'bg-red-400/30',
  },
} as const

export function ExchangeCardGiftsBlock({ gifts, exchangeType }: GiftsBlockProps) {
  const [expanded, setExpanded] = useState(false)

  const { label, icon, iconBg } = exchangeTypeMap[exchangeType]

  const visible = expanded ? gifts : gifts.slice(0, 3)
  const hiddenCount = gifts.length - visible.length
  const previewGift = gifts[visible.length]

  const shouldShowToggleButton = hiddenCount > 0 || expanded

  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1.5">
          <div className={cn('p-0.5 rounded-[6px]', iconBg)}>{icon}</div>
          <p className="text-[14px] font-medium">{label}</p>
        </div>

        <div className="flex items-center space-x-1">
          <p className="text-[14px] font-medium">{gifts.length}</p>
          <div>
            <Gift height={16} width={16} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <ExchangeCardGiftsList gifts={visible} />

        {shouldShowToggleButton && (
          <ExchangeCardToggleGiftsButton
            expanded={expanded}
            hiddenCount={hiddenCount}
            previewGift={previewGift}
            onToggle={() => setExpanded(prev => !prev)}
          />
        )}
      </div>
    </div>
  )
}
