import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/shadcn/accordion'

const accordionItemVariants = cva(
  'group rounded-[12px]',
  {
    variants: {
      variant: {
        default: 'bg-[#272727]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const accordionTriggerVariants = cva(
  'w-full relative py-3.5 px-4',
  {
    variants: {
      size: {
        default: 'text-[16px]',
        sm: 'text-[14px] py-2.5 px-3',
        lg: 'text-[18px] py-4 px-5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const accordionContentVariants = cva(
  'rounded-b-[12px] px-4',
  {
    variants: {
      variant: {
        default: 'bg-[#272727] py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const clearButtonVariants = cva(
  'bg-[#243545] text-[#0A89FA] text-[12px] py-1 px-3 rounded-full absolute right-[42px] top-[12px]',
)

interface UIAccordionItemProps
  extends VariantProps<typeof accordionItemVariants>,
  VariantProps<typeof accordionTriggerVariants>,
  VariantProps<typeof accordionContentVariants> {
  value: string
  title: string
  className?: string
  children: React.ReactNode
  onClear?: () => void
}

export function UIAccordionItem({
  value,
  title,
  children,
  onClear,
  className,
  variant,
  size,
}: UIAccordionItemProps) {
  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClear?.()
  }

  return (
    <AccordionItem
      value={value}
      className={cn(accordionItemVariants({ variant }), className)}
    >
      <AccordionTrigger className={accordionTriggerVariants({ size })}>
        {title}

        {onClear && (
          <button
            type="button"
            className={clearButtonVariants()}
            onClick={handleClearClick}
          >
            Очистить
          </button>
        )}
      </AccordionTrigger>

      <AccordionContent className={accordionContentVariants({ variant })}>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}
