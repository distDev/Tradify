import { useState } from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/shadcn/drawer'

import { UIButton } from '../ui-button'

interface DrawerBaseProps {
  drawerTitle: string
  open?: boolean
  variant?: 'light' | 'dark'
  children?: React.ReactNode
  footerContent?: React.ReactNode
  triggerContent?: React.ReactNode

  onOpenChange?: (open: boolean) => void
  onSubmit?: () => void
  onClear?: () => void

  showSubmitButton?: boolean
  showClearButton?: boolean
  submitButtonText?: string
  clearButtonText?: string
}

export function DrawerBase({
  drawerTitle,
  open,
  variant,
  triggerContent,
  children,

  onOpenChange,
  onSubmit,
  onClear,

  showSubmitButton = true,
  showClearButton = false,
  submitButtonText = 'Submit',
  clearButtonText = 'Clear',
}: DrawerBaseProps) {
  const [localOpen, setLocalOpen] = useState(false)

  const isControlled = open !== undefined
  const state = isControlled ? open : localOpen

  const handleChange = (v: boolean) => {
    if (!isControlled)
      setLocalOpen(v)
    onOpenChange?.(v)
  }

  return (
    <Drawer open={state} onOpenChange={handleChange}>
      <DrawerTrigger asChild>
        {triggerContent}
      </DrawerTrigger>

      <DrawerContent className="min-h-[90vh] rounded-t-2xl p-0 flex flex-col px-5 py-4" variant={variant}>
        <DrawerHeader className="p-4">
          <DrawerTitle className="text-white">{drawerTitle}</DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        <DrawerFooter className="w-full flex flex-row gap-1">

          {showSubmitButton && (
            <UIButton className="flex-1" onClick={onSubmit}>{submitButtonText}</UIButton>
          )}
          {showClearButton && (
            <UIButton className="flex-1" onClick={onClear}>{clearButtonText}</UIButton>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
