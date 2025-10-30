import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Input } from '../shadcn/input'

interface UIInputProps extends ComponentProps<typeof Input> {
  className?: string
  icon?: ReactNode
}

export function UIInput({ className, icon, ...props }: UIInputProps) {
  return (
    <div className="relative flex items-center w-full">
      {icon
        && (
          <div className="absolute left-2 inset-y-0 flex items-center pointer-events-none text-muted-foreground">
            <div className="w-5 h-5 flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}

      <Input
        className={cn(icon && 'pl-9', className)}
        {...props}
      />
    </div>
  )
}
