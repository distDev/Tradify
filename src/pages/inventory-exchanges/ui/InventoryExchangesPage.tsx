import { useNavigate } from '@tanstack/react-router'

import { inventoryExchangesRoute } from '@/app/router/routes'
import { UITabs } from '@/shared/ui'

import { DEFAULT_IN_PROGRESS, DEFAULT_MAIN, DEFAULT_OFFERS, MAIN_TAB, TAB_VALUE_TO_SEARCH_KEY, TABS } from '../model/tabs'

export function InventoryExchangesPage() {
  const { tab, offers, in_progress } = inventoryExchangesRoute.useSearch()

  const navigate = useNavigate({ from: inventoryExchangesRoute.fullPath })

  const handleTabChange = (value: string) => {
    const searchKey = TAB_VALUE_TO_SEARCH_KEY[value]

    navigate({
      search: (prev) => {
        const newSearch = {
          ...prev,
          [searchKey]: value,
        }

        if (value === MAIN_TAB.OFFERS) {
          newSearch.offers = DEFAULT_OFFERS
          newSearch.in_progress = undefined
        }
        else if (value === MAIN_TAB.IN_PROGRESS) {
          newSearch.in_progress = DEFAULT_IN_PROGRESS
          newSearch.offers = undefined
        }

        return newSearch
      },
    })
  }

  return (
    <div>
      <UITabs
        tabs={TABS.MAIN}
        defaultValue={tab || DEFAULT_MAIN}
        onTabChange={handleTabChange}
      />

      {tab === MAIN_TAB.OFFERS && (
        <UITabs
          tabs={TABS.OFFERS}
          defaultValue={offers || DEFAULT_OFFERS}
          onTabChange={handleTabChange}
        />
      )}

      {tab === MAIN_TAB.IN_PROGRESS && (
        <UITabs
          tabs={TABS.IN_PROGRESS}
          defaultValue={in_progress || DEFAULT_IN_PROGRESS}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  )
}
