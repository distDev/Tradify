import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/shadcn/tabs'

interface Tab {
  value: string
  label: string
  content: React.ReactNode
}

interface UITabsProps {
  tabs: Tab[]
  defaultValue?: string
  className?: string
}

export function UITabs({ tabs, defaultValue, className }: UITabsProps) {
  return (
    <Tabs defaultValue={defaultValue ?? tabs[0]?.value} className={className}>
      <TabsList>
        {tabs.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value}>{tab.content}</TabsContent>
      ))}
    </Tabs>
  )
}
