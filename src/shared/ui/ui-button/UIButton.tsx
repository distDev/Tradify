import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'

type UIButtonProps = ComponentProps<typeof Button> & {
  fullWidth?: boolean
}

export function UIButton({ children, className, fullWidth, ...props }: UIButtonProps) {
  return (
    <Button
      className={cn(fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </Button>
  )
}
