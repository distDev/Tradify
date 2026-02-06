import { useNavigate } from '@tanstack/react-router'

import { inventoryGiftsRoute } from '@/app/router/routes'
import { UITabs } from '@/shared/ui'

import { DEFAULT_MAIN, TAB_VALUE_TO_SEARCH_KEY, TABS } from '../model/tabs'

export function InventoryGiftsPage() {
  const { tab } = inventoryGiftsRoute.useSearch()

  const navigate = useNavigate({ from: inventoryGiftsRoute.fullPath })

  const handleTabChange = (value: string) => {
    const searchKey = TAB_VALUE_TO_SEARCH_KEY[value]

    navigate({
      search: prev => ({
        ...prev,
        [searchKey]: value,
      }),
    })
  }

  return (
    <div>
      <UITabs
        tabs={TABS.MAIN}
        defaultValue={tab || DEFAULT_MAIN}
        onTabChange={handleTabChange}
      />
    </div>
  )
}
