import type { Meta, StoryObj } from '@storybook/react'
import { UISelect } from '@/shared'

const meta = {
  title: 'Shared/UISelect',
  component: UISelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select',
    },
    label: {
      control: 'text',
      description: 'Label for the select group',
    },
    options: {
      control: 'object',
      description: 'Array of option objects with value and label',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    size: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'Size of the select trigger',
    },
  },
} satisfies Meta<typeof UISelect>

export default meta

type Story = StoryObj<typeof meta>

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
]

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
]

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended' },
]

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
  },
}

export const WithLabel: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option',
    label: 'Options',
  },
}

export const SmallSize: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select',
    size: 'sm',
  },
}

export const Countries: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
    label: 'Country',
  },
}

export const Status: Story = {
  args: {
    options: statusOptions,
    placeholder: 'Select status',
    label: 'Status',
  },
}

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    placeholder: 'Select from many options',
    label: 'Many Options',
  },
}

export const WithCustomClassName: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Custom styled select',
    className: 'w-80',
  },
}

export const WithoutLabel: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'No label select',
  },
}
