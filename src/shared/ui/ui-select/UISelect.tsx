import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/select'

interface Option {
  value: string
  label: string
}

interface UISelectProps {
  placeholder?: string
  label?: string
  options: Option[]
  className?: string
  size?: 'sm' | 'default'
}

export function UISelect({ placeholder, label, options, className, size }: UISelectProps) {
  return (
    <Select>
      <SelectTrigger className={className} size={size}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}

          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
