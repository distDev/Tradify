import { ArrowDownUp, Settings2 } from 'lucide-react'

import { FilterListWithSearch } from '@/features'
import { UIButtonWithDrawer, UIInput, UISelectWithDrawer } from '@/shared'

import { AllFilters } from './AllFilters'
import { FilterSort } from './FilterSort'

interface FiltersPanelProps {}

export function FiltersPanel({}) {
  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex space-x-2.5">
        <UIInput
          className="w-full"
          placeholder="Название или описание"
        />

        <UIButtonWithDrawer
          className="w-[40px] h-[40px]"
          buttonVariant="secondary"
          drawerTitle="Сортировка"
          icon={<ArrowDownUp />}
        >
          <FilterSort />
        </UIButtonWithDrawer>
      </div>

      <div className="flex space-x-2.5">
        <UIButtonWithDrawer
          className="w-[40px] h-[40px]"
          buttonVariant="secondary"
          drawerVariant="dark"
          drawerTitle="Фильтры"
          icon={<Settings2 />}
        >
          <AllFilters />
        </UIButtonWithDrawer>

        <UISelectWithDrawer
          className="h-[40px] flex-1"
          placeholder="Коллекции"
          drawerTitle="Коллекции"
        >
          <FilterListWithSearch />
        </UISelectWithDrawer>

        <UISelectWithDrawer
          className="h-[40px] flex-1"
          placeholder="Фон"
          drawerTitle="Фон"
        >
          <FilterListWithSearch />
        </UISelectWithDrawer>

        <UISelectWithDrawer
          className="h-[40px] flex-1"
          placeholder="Символы"
          drawerTitle="Символы"
        >
          <FilterListWithSearch />
        </UISelectWithDrawer>
      </div>
    </div>
  )
}
