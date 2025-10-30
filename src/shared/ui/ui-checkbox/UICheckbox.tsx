import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Checkbox } from '@/shared/ui/shadcn/checkbox'

type UICheckboxProps = ComponentProps<typeof Checkbox> & {
  id: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function UICheckbox({ id, children, disabled, className, ...props }: UICheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-center gap-3 rounded-md cursor-pointer transition-colors',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <Checkbox id={id} disabled={disabled} className={cn(className)} {...props} />
      <div className="flex flex-1 items-center gap-3">{children}</div>
    </label>
  )
}
