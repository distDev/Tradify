import type { ComponentProps } from 'react'

import { Input } from '../shadcn/input'

type UIInputProps = ComponentProps<typeof Input> & {
  className?: string
}

export function UIInput({ className, ...props }: UIInputProps) {
  return (
    <Input className={className} {...props} />
  )
}
