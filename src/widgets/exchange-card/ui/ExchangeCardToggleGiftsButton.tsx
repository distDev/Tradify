import React from 'react'

interface ExchangeCardToggleGiftsButtonProps {
  expanded: boolean
  hiddenCount: number
  previewGift?: { picture: string }
  onToggle: () => void
}

export const ExchangeCardToggleGiftsButton: React.FC<ExchangeCardToggleGiftsButtonProps> = ({
  expanded,
  hiddenCount,
  previewGift,
  onToggle,
}) => {
  const toggleButtonText = expanded ? 'Скрыть' : 'Показать'
  const showHiddenCount = hiddenCount > 0

  return (
    <button
      type="button"
      className="bg-accent relative overflow-hidden h-[87px] rounded-[10px]"
      onClick={onToggle}
    >
      <p className="relative flex flex-col font-[14px] z-10">
        <span>{toggleButtonText}</span>
        {showHiddenCount && <span>{hiddenCount}</span>}
      </p>

      {previewGift && (
        <img
          src={previewGift.picture}
          alt={previewGift.picture}
          className="absolute top-0 left-0 w-full h-full object-cover z-1 blur-[3px]"
        />
      )}
    </button>
  )
}
