'use client'

import { ChevronDownIcon } from 'lucide-react'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/shadcn/drawer'
import { UIButton } from '@/shared/ui/ui-button'

interface SelectWithModalProps {
  modalTitle: string
  placeholder?: string
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  selectedItems?: any[]

  onOpenChange?: (open: boolean) => void
  onSubmit?: () => void
  onClear?: () => void

  showSubmitButton?: boolean
  showClearButton?: boolean
  submitButtonText?: string
  clearButtonText?: string
}

export function UISelectWithModal({
  modalTitle,
  placeholder = 'Select...',
  children,
  className,
  disabled = false,
  selectedItems,

  onOpenChange,
  onSubmit,
  onClear,

  showSubmitButton = true,
  showClearButton = false,
  submitButtonText = 'Submit',
  clearButtonText = 'Clear',
}: SelectWithModalProps) {
  const [open, setOpen] = useState(false)

  const selectedCount = selectedItems?.length || 0
  const hasSelectedItems = selectedCount > 0

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    onOpenChange?.(isOpen)
  }

  const handleSubmit = () => {
    onSubmit?.()
    setOpen(false)
  }

  const handleClear = () => {
    onClear?.()
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <UIButton
          variant={hasSelectedItems ? 'light' : 'secondary'}
          className={cn(
            'justify-between w-auto',
            className,
          )}
          disabled={disabled}
        >
          <span>
            {placeholder}
            {hasSelectedItems && ` (${selectedCount})`}
          </span>

          <ChevronDownIcon className="size-4 opacity-50" />
        </UIButton>
      </DrawerTrigger>

      <DrawerContent className="min-h-[90vh] rounded-t-2xl p-0 flex flex-col ">
        <DrawerHeader className="p-4 ">
          <DrawerTitle className="text-white">{modalTitle}</DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        <DrawerFooter className="w-full flex flex-row gap-1">
          {showSubmitButton && (
            <UIButton
              className="flex-1"
              onClick={handleSubmit}
            >
              {submitButtonText}
            </UIButton>
          )}

          {showClearButton && (
            <UIButton
              className="flex-1"
              onClick={handleClear}
            >
              {clearButtonText}
            </UIButton>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
