export type TabType = 'tab' | 'offers' | 'in_progress'

export const MAIN_TAB = {
  PLACED: 'placed',
  OFFERS: 'offers',
  IN_PROGRESS: 'in_progress',
} as const

export const TAB_VALUE_TO_SEARCH_KEY: Record<string, TabType> = {
  [MAIN_TAB.PLACED]: 'tab',
  [MAIN_TAB.OFFERS]: 'tab',
  [MAIN_TAB.IN_PROGRESS]: 'tab',
  incoming: 'offers',
  outgoing: 'offers',
  to_transfer: 'in_progress',
  pending: 'in_progress',
}

export const TABS = {
  MAIN: [
    { value: MAIN_TAB.PLACED, label: 'Размещено' },
    { value: MAIN_TAB.OFFERS, label: 'Офферы' },
    { value: MAIN_TAB.IN_PROGRESS, label: 'В процессе' },
  ],
  OFFERS: [
    { value: 'incoming', label: 'Входящие' },
    { value: 'outgoing', label: 'Исходящие' },
  ],
  IN_PROGRESS: [
    { value: 'to_transfer', label: 'К передаче' },
    { value: 'pending', label: 'Ожидание' },
  ],
}

export const DEFAULT_OFFERS = TABS.OFFERS[0].value
export const DEFAULT_IN_PROGRESS = TABS.IN_PROGRESS[0].value
export const DEFAULT_MAIN = TABS.MAIN[0].value
