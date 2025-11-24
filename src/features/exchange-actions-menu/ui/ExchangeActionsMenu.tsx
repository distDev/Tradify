import { EllipsisVertical, Heart } from 'lucide-react'

import { UIButton } from '@/shared/ui'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/ui/shadcn/dialog'

interface ExchangeActionsMenuProps {}

export function ExchangeActionsMenu({}: ExchangeActionsMenuProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <UIButton
            variant="ghost"
            size="icon"
          >
            <EllipsisVertical />
          </UIButton>
        </DialogTrigger>

        <DialogContent position="bottom" className="bg-secondary rounded-2xl">
          <button type="button" className="flex items-start space-x-2 w-full border-b-accent">
            <Heart />
            <span>Добавить в избранное</span>
          </button>
          <button type="button" className="flex items-start space-x-2 w-full border-b-accent">
            <Heart />
            <span>Добавить в избранное</span>
          </button>
          <button type="button" className="flex items-start space-x-2 w-full border-b-accent">
            <Heart />
            <span>Добавить в избранное</span>
          </button>
          <button type="button" className="flex items-start space-x-2 w-full border-b-accent">
            <Heart />
            <span>Добавить в избранное</span>
          </button>
        </DialogContent>
      </Dialog>
    </>
  )
}
