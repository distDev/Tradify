'use client'

import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { DrawerBase } from '@/shared/ui/drawer-base'
import { UIButton } from '@/shared/ui/ui-button'

interface SelectWithDrawerTriggerProps {
  placeholder?: string
  className?: string
  disabled?: boolean
  selectedItems?: unknown[]
}

interface SelectWithDrawerProps {
  drawerTitle: string
  placeholder?: string
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  selectedItems?: unknown[]
  onOpenChange?: (open: boolean) => void
  onSubmit?: () => void
  onClear?: () => void
  showSubmitButton?: boolean
  showClearButton?: boolean
  submitButtonText?: string
  clearButtonText?: string
}

function SelectWithDrawerTrigger({
  placeholder,
  className,
  disabled = false,
  selectedItems,
  ...props
}: SelectWithDrawerTriggerProps) {
  const hasSelectedItems = Boolean(selectedItems?.length)
  const buttonVariant = hasSelectedItems ? 'light' : 'secondary'

  return (
    <UIButton
      variant={buttonVariant}
      className={cn('justify-between w-auto', className)}
      disabled={disabled}
      {...props}
    >
      <span>
        {placeholder}
        {hasSelectedItems && ` (${selectedItems?.length ?? 0})`}
      </span>
      <ChevronDownIcon className="size-4 opacity-50" />
    </UIButton>
  )
}

export function UISelectWithDrawer({
  drawerTitle,
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
}: SelectWithDrawerProps) {
  return (
    <DrawerBase
      drawerTitle={drawerTitle}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      onClear={onClear}
      showSubmitButton={showSubmitButton}
      showClearButton={showClearButton}
      submitButtonText={submitButtonText}
      clearButtonText={clearButtonText}
      triggerContent={(
        <SelectWithDrawerTrigger
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          selectedItems={selectedItems}
        />
      )}
    >
      {children}
    </DrawerBase>
  )
}
