import { ArrowDownUp } from 'lucide-react'

import { UIButton } from '@/shared'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/shadcn/dialog'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcn/radio-group'

const options = [
  { value: '1', label: 'Сначала дешёвые' },
  { value: '2', label: 'Сначала дорогие' },
  { value: '3', label: 'Самые залайканные' },
  { value: '4', label: 'Недавно добавленные' },
  { value: '5', label: 'Давно добавленные' },
  { value: '6', label: 'По номеру ↑' },
  { value: '7', label: 'По номеру ↓' },
  { value: '8', label: 'Популярные' },
]

export function FilterSort() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <UIButton
            className="w-[40px] h-[40px]"
            variant="secondary"
          >
            <ArrowDownUp />
          </UIButton>
        </DialogTrigger>

        <DialogContent position="bottom" className="bg-secondary rounded-2xl">
          <RadioGroup>
            {options.map(option => (
              <label
                key={option.value}
                htmlFor={`r-${option.value}`}
                className="flex items-center gap-3 rounded-md cursor-pointer transition-colors"
              >
                <RadioGroupItem value={option.value} id={`r-${option.value}`} />

                <span className="cursor-pointer text-white">
                  {option.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </DialogContent>
      </Dialog>

    </>

  )
}
