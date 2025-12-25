import { ArrowDown, ArrowUp } from 'lucide-react'

export const EXCHANGE_TYPE_MAP = {
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
