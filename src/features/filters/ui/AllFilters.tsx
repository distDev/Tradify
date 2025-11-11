import { FilterListWithSearch } from '@/features'
import { UIAccordionItem } from '@/shared'
import { Accordion } from '@/shared/ui/shadcn/accordion'

interface AllFiltersProps {}

export function AllFilters({}: AllFiltersProps) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="collection">
        <UIAccordionItem className="text-white" value="item-1" title="Коллекции">
          <FilterListWithSearch />
        </UIAccordionItem>

        <UIAccordionItem className="text-white" value="item-2" title="Фон">
          <FilterListWithSearch />
        </UIAccordionItem>

        <UIAccordionItem className="text-white" value="item-3" title="Символы">
          <FilterListWithSearch />
        </UIAccordionItem>
      </Accordion>
    </>

  )
}
