import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcn/radio-group'

interface FilterSortProps {}

const options = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
]

export function FilterSort({}: FilterSortProps) {
  return (
    <RadioGroup>
      {options.map(option => (
        <div key={option.value} className="flex items-center gap-3">
          <RadioGroupItem value={option.value} id={`r-${option.value}`} />
          <label htmlFor={`r-${option.value}`} className="cursor-pointer">
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  )
}
