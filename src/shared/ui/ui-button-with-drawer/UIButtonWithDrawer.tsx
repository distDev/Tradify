import type { ReactNode } from 'react'

import { DrawerBase, UIButton } from '@/shared'

type DrawerVariant = 'light' | 'dark'

type ButtonVariant
  = | 'light'
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined

interface UIButtonWithDrawerProps {
  drawerTitle: string
  children?: ReactNode
  icon?: ReactNode
  className?: string
  disabled?: boolean
  triggerText?: string
  drawerVariant?: DrawerVariant
  buttonVariant?: ButtonVariant

  onOpenChange?: (open: boolean) => void
  onSubmit?: () => void
  onClear?: () => void

  showSubmitButton?: boolean
  showClearButton?: boolean
  submitButtonText?: string
  clearButtonText?: string
}

const DEFAULT_SUBMIT_BUTTON_TEXT = 'Submit'
const DEFAULT_CLEAR_BUTTON_TEXT = 'Clear'

export function UIButtonWithDrawer({
  icon,
  buttonVariant,
  triggerText,
  drawerTitle,
  children,
  className,
  drawerVariant,
  disabled = false,
  onOpenChange,
  onSubmit,
  onClear,
  showSubmitButton = true,
  showClearButton = false,
  submitButtonText = DEFAULT_SUBMIT_BUTTON_TEXT,
  clearButtonText = DEFAULT_CLEAR_BUTTON_TEXT,
}: UIButtonWithDrawerProps) {
  const triggerContent = (
    <UIButton className={className} disabled={disabled} variant={buttonVariant}>
      {triggerText ? <span>{triggerText}</span> : null}

      {icon ?? null}
    </UIButton>
  )

  return (
    <DrawerBase
      drawerTitle={drawerTitle}
      variant={drawerVariant}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      onClear={onClear}
      showSubmitButton={showSubmitButton}
      showClearButton={showClearButton}
      submitButtonText={submitButtonText}
      clearButtonText={clearButtonText}
      triggerContent={triggerContent}
    >
      {children}
    </DrawerBase>
  )
}
