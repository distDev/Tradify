import type { Meta, StoryObj } from '@storybook/react'
import { UIButton } from '@/shared'

const meta = {
  title: 'Shared/UIButton',
  component: UIButton,
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UIButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
}

export const Link: Story = {
  args: { variant: 'link', children: 'Link' },
}

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
}

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
}

export const Icon: Story = {
  args: { size: 'icon', children: '🔔' },
}

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full width' },
}
