import type { Meta, StoryObj } from '@storybook/react'

import { UICheckbox } from '@/shared'

const meta = {
  title: 'Shared/UICheckbox',
  component: UICheckbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof UICheckbox>

export default meta

type Story = StoryObj<typeof meta>

const data = [
  { name: 'Crystal Balls', link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadmrmaapwakfm.png', id: '1' },
  { name: 'Plush Pepes', link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagad-bgaaotzkfm.png', id: '2' },
  { name: 'Durov’s Caps', link: 'https://tiermaker.com/images/media/template_images/2024/18350072/gifts-telegram-6-15-2025-awebmarket-18350072/giftssoonagadhryaaskskvm.png', id: '3' },
]

export const List: Story = {
  args: { id: 'placeholder', children: 'placeholder' },
  render: (args) => {
    const { id: _omitId, children: _omitChildren, ...rest } = args
    return (
      <div className="flex gap-1.5 flex-col text-white">
        {data.map(item => (
          <UICheckbox id={item.id} key={item.id} {...rest} >
            <div className="flex gap-2.5 items-center">
              <img
                src={item.link}
                alt={item.name}
                className="w-12 h-12"
              />
              <p>{item.name}</p>
            </div>
          </UICheckbox>
        ))}
      </div>
    )
  },
}

