import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '@/shared/ui/shadcn/accordion'
import { UIAccordionItem, UICheckbox, UIInput } from '@/shared'

const meta = {
  title: 'Shared/UIAccordionItem',
  component: UIAccordionItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Unique value for the accordion item',
    },
    title: {
      control: 'text',
      description: 'Title text displayed in the trigger',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    variant: {
      control: 'select',
      options: ['default'],
      description: 'Variant style for the accordion item',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Size variant for the trigger',
    },
    onClear: {
      action: 'cleared',
      description: 'Callback function when clear button is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] p-6 rounded-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UIAccordionItem>

export default meta

type Story = StoryObj<typeof meta>

const checkboxData = [
  {
    name: 'Crystal Balls',
    link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadmrmaapwakfm.png',
    id: '1',
  },
  {
    name: 'Plush Pepes',
    link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagad-bgaaotzkfm.png',
    id: '2',
  },
  {
    name: "Durov's Caps",
    link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadhryaaskskvm.png',
    id: '3',
  },
]

export const WithInputAndCheckboxes: Story = {
  args: {
    value: 'collection',
    title: 'Коллекция',
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="collection">
      <UIAccordionItem {...args} className="text-white">
        <div className="flex flex-col gap-4">
          <UIInput placeholder="Поиск..." className="bg-[#313134]" />

          <div className="flex gap-1.5 flex-col text-white">
            {checkboxData.map((item) => (
              <UICheckbox id={item.id} key={item.id}>
                <div className="flex gap-2.5 items-center">
                  <img src={item.link} alt={item.name} className="w-12 h-12" />
                  <p>{item.name}</p>
                </div>
              </UICheckbox>
            ))}
          </div>
        </div>
      </UIAccordionItem>
    </Accordion>
  ),
}

export const WithClearButton: Story = {
  args: {
    value: 'background',
    title: 'Фон',
    onClear: () => console.log('Clear clicked'),
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="background">
      <UIAccordionItem {...args} className="text-white">
        <p className="text-white">
          Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.
        </p>
      </UIAccordionItem>
    </Accordion>
  ),
}

export const SimpleText: Story = {
  args: {
    value: 'simple',
    title: 'Простой текст',
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5">
      <UIAccordionItem {...args} className="text-white">
        <p className="text-white">
          Это пример простого текстового контента внутри аккордеона.
        </p>
      </UIAccordionItem>
    </Accordion>
  ),
}

export const MultipleItems: Story = {
  args: {
    value: 'item-1',
    title: 'Первый элемент',
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="item-1">
      <UIAccordionItem {...args} className="text-white" onClear={() => console.log('Clear 1')}>
        <p className="text-white">Контент первого элемента аккордеона.</p>
      </UIAccordionItem>

      <UIAccordionItem value="item-2" title="Второй элемент" className="text-white" onClear={() => console.log('Clear 2')}>
        <p className="text-white">Контент второго элемента аккордеона.</p>
      </UIAccordionItem>

      <UIAccordionItem value="item-3" title="Третий элемент" className="text-white">
        <p className="text-white">Контент третьего элемента без кнопки очистки.</p>
      </UIAccordionItem>
    </Accordion>
  ),
}

export const SmallSize: Story = {
  args: {
    value: 'small',
    title: 'Маленький размер',
    size: 'sm',
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="small">
      <UIAccordionItem {...args} className="text-white">
        <p className="text-white text-sm">Контент с маленьким размером триггера.</p>
      </UIAccordionItem>
    </Accordion>
  ),
}

export const LargeSize: Story = {
  args: {
    value: 'large',
    title: 'Большой размер',
    size: 'lg',
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2.5" defaultValue="large">
      <UIAccordionItem {...args} className="text-white">
        <p className="text-white text-lg">Контент с большим размером триггера.</p>
      </UIAccordionItem>
    </Accordion>
  ),
}

