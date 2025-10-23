import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { UISelectWithModal } from '@/shared'

const meta = {
  title: 'Shared/UISelectWithModal',
  component: UISelectWithModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    modalTitle: {
      control: 'text',
      description: 'Title displayed in the modal header',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select trigger',
    },
    selectedItems: {
      control: 'object',
      description: 'Array of selected items',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    showSubmitButton: {
      control: 'boolean',
      description: 'Whether to show the submit button',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Whether to show the clear button',
    },
    submitButtonText: {
      control: 'text',
      description: 'Text for the submit button',
    },
    clearButtonText: {
      control: 'text',
      description: 'Text for the clear button',
    },
    onSubmit: {
      action: 'onSubmit',
      description: 'Callback when submit button is clicked',
    },
    onClear: {
      action: 'onClear',
      description: 'Callback when clear button is clicked',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when modal opens/closes',
    },
  },
} satisfies Meta<typeof UISelectWithModal>

export default meta

type Story = StoryObj<typeof meta>

// Sample data for stories
const sampleItems = [
  { id: 1, name: 'Item 1', category: 'Category A' },
  { id: 2, name: 'Item 2', category: 'Category B' },
  { id: 3, name: 'Item 3', category: 'Category A' },
  { id: 4, name: 'Item 4', category: 'Category C' },
  { id: 5, name: 'Item 5', category: 'Category B' },
]

const InteractiveWrapper = (args: any) => {
  const [selectedItems, setSelectedItems] = useState(args.selectedItems || [])
  
  const handleSubmit = () => {
    console.log('Selected items:', selectedItems)
    args.onSubmit?.()
  }
  
  const handleClear = () => {
    setSelectedItems([])
    args.onClear?.()
  }

  return (
    <div className='p-5 rounded-2xl bg-[#141414]'>
        <UISelectWithModal
      {...args}
      selectedItems={selectedItems}
      onSubmit={handleSubmit}
      onClear={handleClear}
    >
      <div className="p-4 space-y-2 text-white">
        <p>Контент</p>
      </div>
    </UISelectWithModal>
    </div>
  )
}

export const Default: Story = {
  args: {
    modalTitle: 'Select Items',
    placeholder: 'Choose items...',
    selectedItems: [],
  },
  render: InteractiveWrapper,
}

export const WithSelectedItems: Story = {
  args: {
    modalTitle: 'Collections',
    placeholder: 'Select collections',
    selectedItems: sampleItems,
  },
  render: InteractiveWrapper,
}

export const OnlySubmitButton: Story = {
  args: {
    modalTitle: 'Confirm Selection',
    placeholder: 'Select items',
    selectedItems: sampleItems.slice(0, 2),
    showSubmitButton: true,
    showClearButton: false,
    submitButtonText: 'Save',
  },
  render: InteractiveWrapper,
}

export const OnlyClearButton: Story = {
  args: {
    modalTitle: 'Clear Selection',
    placeholder: 'Select items',
    selectedItems: sampleItems.slice(0, 3),
    showSubmitButton: false,
    showClearButton: true,
    clearButtonText: 'Clear Selection',
  },
  render: InteractiveWrapper,
}

export const BothButtons: Story = {
  args: {
    modalTitle: 'Filter Options',
    placeholder: 'Apply filters',
    selectedItems: sampleItems.slice(0, 2),
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Reset',
  },
  render: InteractiveWrapper,
}

export const Disabled: Story = {
  args: {
    modalTitle: 'Disabled Select',
    placeholder: 'This is disabled',
    selectedItems: [],
    disabled: true,
  },
  render: InteractiveWrapper,
}

export const EmptyState: Story = {
  args: {
    modalTitle: 'Empty Selection',
    placeholder: 'No items selected',
    selectedItems: [],
    showSubmitButton: true,
    showClearButton: true,
  },
  render: InteractiveWrapper,
}
