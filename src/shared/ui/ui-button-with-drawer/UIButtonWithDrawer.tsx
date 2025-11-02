import { DrawerBase, UIButton } from '@/shared'

interface UIButtonWithDrawerProps {
  drawerTitle: string
  children?: React.ReactNode
  icon?: React.ReactNode
  className?: string
  disabled?: boolean
  triggerText?: string

  onOpenChange?: (open: boolean) => void
  onSubmit?: () => void
  onClear?: () => void

  showSubmitButton?: boolean
  showClearButton?: boolean
  submitButtonText?: string
  clearButtonText?: string
}

export function UIButtonWithDrawer({
  icon,
  triggerText,
  drawerTitle,
  children,
  className,
  disabled = false,
  onOpenChange,
  onSubmit,
  onClear,
  showSubmitButton = true,
  showClearButton = false,
  submitButtonText = 'Submit',
  clearButtonText = 'Clear',

}: UIButtonWithDrawerProps) {
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
        <UIButton
          className={className}
          disabled={disabled}
        >
          {triggerText && <span>{triggerText}</span>}

          {icon && icon}
        </UIButton>
      )}
    >
      {children}
    </DrawerBase>
  )
}
