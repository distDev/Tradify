import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { UISelectWithDrawer } from '@/shared'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/shadcn/accordion'
import { UICheckbox } from '@/shared/ui/ui-checkbox'

const meta = {
  title: 'Shared/UISelectWithDrawer',
  component: UISelectWithDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    drawerTitle: {
      control: 'text',
      description: 'Title displayed in the drawer header',
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
      description: 'Callback when drawer opens/closes',
    },
  },
} satisfies Meta<typeof UISelectWithDrawer>

export default meta

type Story = StoryObj<typeof meta>

const filterOptions = [
  { id: '1', name: 'Price Range', type: 'range' },
  { id: '2', name: 'Brand', type: 'select' },
  { id: '3', name: 'Category', type: 'select' },
  { id: '4', name: 'Rating', type: 'select' },
  { id: '5', name: 'Availability', type: 'checkbox' },
]

const categoryOptions = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Clothing' },
  { id: '3', name: 'Home & Garden' },
  { id: '4', name: 'Sports' },
  { id: '5', name: 'Books' },
]

const InteractiveWrapper = ({
  args,
  children,
}: {
  args: any
  children?: React.ReactNode
}) => {
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
    <div className="p-5 rounded-2xl bg-[#141414] min-w-[300px]">
      <UISelectWithDrawer
        {...args}
        selectedItems={selectedItems}
        onSubmit={handleSubmit}
        onClear={handleClear}
      >
        {children}
      </UISelectWithDrawer>
    </div>
  )
}

export const Default: Story = {
  args: {
    drawerTitle: 'Select Options',
    placeholder: 'Choose...',
    selectedItems: [],
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-4 text-white">
        <p>Content goes here</p>
      </div>
    </InteractiveWrapper>
  ),
}

export const WithSelectedItems: Story = {
  args: {
    drawerTitle: 'Filters',
    placeholder: 'Select filters',
    selectedItems: filterOptions.slice(0, 3),
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-4 text-white">
        <div className="space-y-3">
          {filterOptions.map((option) => (
            <UICheckbox key={option.id} id={option.id}>
              <span className="text-sm">{option.name}</span>
            </UICheckbox>
          ))}
        </div>
      </div>
    </InteractiveWrapper>
  ),
}

export const WithAccordionContent: Story = {
  args: {
    drawerTitle: 'Advanced Filters',
    placeholder: 'Apply filters',
    selectedItems: filterOptions.slice(0, 2),
    submitButtonText: 'Apply',
    clearButtonText: 'Reset',
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 text-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="category">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {categoryOptions.map((category) => (
                <UICheckbox key={category.id} id={category.id}>
                  <span className="text-sm">{category.name}</span>
                </UICheckbox>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-400">Price range selector content</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </InteractiveWrapper>
  ),
}

export const OnlySubmitButton: Story = {
  args: {
    drawerTitle: 'Confirm Selection',
    placeholder: 'Select items',
    selectedItems: filterOptions.slice(0, 2),
    showSubmitButton: true,
    showClearButton: false,
    submitButtonText: 'Save',
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-3 text-white">
        <p className="text-sm text-gray-400">Select your preferences</p>
        <div className="space-y-2">
          {filterOptions.slice(0, 3).map((option) => (
            <UICheckbox key={option.id} id={option.id}>
              <span className="text-sm">{option.name}</span>
            </UICheckbox>
          ))}
        </div>
      </div>
    </InteractiveWrapper>
  ),
}

export const OnlyClearButton: Story = {
  args: {
    drawerTitle: 'Clear Selection',
    placeholder: 'Select items',
    selectedItems: filterOptions.slice(0, 3),
    showSubmitButton: false,
    showClearButton: true,
    clearButtonText: 'Clear All',
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-3 text-white">
        <p className="text-sm text-gray-400">Selected items can be cleared</p>
      </div>
    </InteractiveWrapper>
  ),
}

export const BothButtons: Story = {
  args: {
    drawerTitle: 'Filter Options',
    placeholder: 'Apply filters',
    selectedItems: filterOptions.slice(0, 2),
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Reset',
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-4 text-white">
        <div className="space-y-3">
          <p className="text-sm font-medium">Select filters:</p>
          {filterOptions.map((option) => (
            <UICheckbox key={option.id} id={option.id}>
              <span className="text-sm">{option.name}</span>
            </UICheckbox>
          ))}
        </div>
      </div>
    </InteractiveWrapper>
  ),
}

export const Disabled: Story = {
  args: {
    drawerTitle: 'Disabled Select',
    placeholder: 'This is disabled',
    selectedItems: [],
    disabled: true,
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 text-white">
        <p>This drawer content is not accessible when disabled</p>
      </div>
    </InteractiveWrapper>
  ),
}

export const EmptyState: Story = {
  args: {
    drawerTitle: 'Empty Selection',
    placeholder: 'No items selected',
    selectedItems: [],
    showSubmitButton: true,
    showClearButton: true,
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 text-white">
        <p className="text-sm text-gray-400">No items are currently selected</p>
      </div>
    </InteractiveWrapper>
  ),
}

export const CustomPlaceholder: Story = {
  args: {
    drawerTitle: 'Custom Text',
    placeholder: 'Фильтры',
    selectedItems: [],
    showClearButton: true,
    clearButtonText: 'Очистить',
    submitButtonText: 'Применить',
  },
  render: (args) => (
    <InteractiveWrapper args={args}>
      <div className="p-4 space-y-3 text-white">
        <div className="space-y-2">
          {filterOptions.map((option) => (
            <UICheckbox key={option.id} id={option.id}>
              <span className="text-sm">{option.name}</span>
            </UICheckbox>
          ))}
        </div>
      </div>
    </InteractiveWrapper>
  ),
}

