import { UICheckbox, UIInput } from '@/shared'

interface FilterListWithSearchProps {}

const checkboxData = [
  {
    name: 'Crystal Balls',
    image: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadmrmaapwakfm.png',
    id: '1',
  },
  {
    name: 'Plush Pepes',
    image: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagad-bgaaotzkfm.png',
    id: '2',
  },
  {
    name: 'Durov\'s Caps',
    image: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadhryaaskskvm.png',
    id: '3',
  },
]

export function FilterListWithSearch({}: FilterListWithSearchProps) {
  return (
    <div className="flex flex-col gap-5">
      <UIInput variant="light" placeholder="Поиск..." />

      <div className="flex gap-1.5 flex-col text-white">
        {checkboxData.map(item => (
          <UICheckbox id={item.id} key={item.id}>
            <div className="flex gap-2.5 items-center">
              <img src={item.image} alt={item.name} className="w-12 h-12" />
              <p>{item.name}</p>
            </div>
          </UICheckbox>
        ))}
      </div>
    </div>
  )
}
