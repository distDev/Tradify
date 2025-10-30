import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  [
    // базовые стили
    'flex w-full h-10 min-w-0 rounded-md bg-transparent px-3 py-1 text-base md:text-sm',
    'shadow-xs transition-[color,box-shadow] outline-none',
    'placeholder:text-muted-foreground file:text-foreground file:bg-transparent file:text-sm file:font-medium file:inline-flex file:h-7',
    'selection:bg-primary selection:text-primary-foreground',

    // состояния
    'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',

    // вариант с ошибкой
    'aria-invalid:border aria-invalid:border-destructive/70 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',

    // тёмная тема
    'dark:bg-input/30',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-[#272727] text-white',
        light: 'bg-[#313134] text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Input({ className, variant, type, ...props }: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ variant, className }),
      )}
      {...props}
    />
  )
}

export { Input }
