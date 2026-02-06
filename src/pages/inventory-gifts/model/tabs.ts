export type TabType = 'tab' | 'type'

export const TAB_VALUE_TO_SEARCH_KEY: Record<string, TabType> = {
  unlisted: 'tab',
  listed: 'tab',
}

export const TABS = {
  MAIN: [
    {
      value: 'unlisted',
      label: 'Не выставленные',
    },
    {
      value: 'listed',
      label: 'Выставленные',
    },
  ],

}

export const DEFAULT_MAIN = TABS.MAIN[0].value
