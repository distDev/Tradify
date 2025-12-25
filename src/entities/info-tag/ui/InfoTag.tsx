import type { InfoTagType } from '@/entities/info-tag/model/types'

import { Star } from 'lucide-react'

import { INFO_TAGS_MAP } from '@/entities/info-tag/model/map'
import { UIButtonWithDrawer } from '@/shared/ui'

interface InfoTagProps {
  type: InfoTagType
}

// TODO: Доделать в дальнейшем этот компонент
export function InfoTag({ type }: InfoTagProps) {
  const { label, drawerTitle, icon, infoDescription, infoPicture, textColor, backgroundColor } = INFO_TAGS_MAP[type]

  return (
    <UIButtonWithDrawer drawerTitle={drawerTitle} triggerText={label} icon={<Star />} className={`h-[20px] rounded-full text-[12px] bg-green-300/50 text-[${textColor}]`}>
      <p>{infoDescription}</p>
    </UIButtonWithDrawer>
  )
}
