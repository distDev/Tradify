import { UISelect, UITabs } from '@/shared'

export function Filters() {
  const tabs = [
    {
      value: 'one',
      label: 'Получено',
      content: <><h2>Полученое 1</h2></>,
    },
    {
      value: 'second',
      label: 'Размещено',
      content: <><h2>Размещено 1</h2></>,
    },
  ]

  return (
    <div className="flex gap-1.5 flex-col">
      <div className="flex gap-2">
        <UISelect
          placeholder="Выберите фрукт"
          label="Фрукты"

          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'grapes', label: 'Grapes' },
          ]}
        />

        <UISelect
          placeholder="Выберите фрукт"
          label="Фрукты"

          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'grapes', label: 'Grapes' },
          ]}
        />
      </div>

      <UITabs tabs={tabs} />
    </div>
  )
}
