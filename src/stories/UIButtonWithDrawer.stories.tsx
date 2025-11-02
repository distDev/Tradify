import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Filter, SlidersHorizontal, Settings, Search, Menu } from 'lucide-react'

import { UIButtonWithDrawer } from '@/shared'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/shadcn/accordion'
import { UICheckbox } from '@/shared/ui/ui-checkbox'
import { UIInput } from '@/shared'

const meta = {
  title: 'Shared/UIButtonWithDrawer',
  component: UIButtonWithDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    drawerTitle: {
      control: 'text',
      description: 'Title displayed in the drawer header',
    },
    triggerText: {
      control: 'text',
      description: 'Text displayed on the button trigger',
    },
    icon: {
      control: false,
      description: 'Icon component to display in the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
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
    className: {
      control: 'text',
      description: 'Additional CSS classes for the button',
    },
  },
} satisfies Meta<typeof UIButtonWithDrawer>

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

export const Default: Story = {
  args: {
    drawerTitle: 'Filter Options',
    triggerText: 'Open Filters',
    showSubmitButton: true,
    showClearButton: false,
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-4 text-white">
          <p>Content goes here</p>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const IconOnly: Story = {
  args: {
    drawerTitle: 'Settings',
    icon: <Settings className="size-5" />,
    showSubmitButton: true,
    showClearButton: false,
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-4 text-white">
          <p>Settings content</p>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const WithTextAndIcon: Story = {
  args: {
    drawerTitle: 'Filters',
    triggerText: 'Filters',
    icon: <Filter className="size-5" />,
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Clear',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-4 text-white">
          <div className="space-y-3">
            {filterOptions.map((option) => (
              <UICheckbox key={option.id} id={option.id}>
                <span className="text-sm">{option.name}</span>
              </UICheckbox>
            ))}
          </div>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const WithAccordionContent: Story = {
  args: {
    drawerTitle: 'Advanced Filters',
    triggerText: 'Advanced',
    icon: <SlidersHorizontal className="size-5" />,
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Reset',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
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
      </UIButtonWithDrawer>
    </div>
  ),
}

export const WithSearchInput: Story = {
  args: {
    drawerTitle: 'Search',
    triggerText: 'Search',
    icon: <Search className="size-5" />,
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Search',
    clearButtonText: 'Clear',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-4 text-white">
          <UIInput placeholder="Search..." className="bg-[#313134]" />
          <div className="space-y-2">
            <p className="text-sm font-medium">Recent searches:</p>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Electronics</p>
              <p className="text-sm text-gray-400">Clothing</p>
              <p className="text-sm text-gray-400">Home & Garden</p>
            </div>
          </div>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const OnlySubmitButton: Story = {
  args: {
    drawerTitle: 'Confirm Action',
    triggerText: 'Confirm',
    icon: <Menu className="size-5" />,
    showSubmitButton: true,
    showClearButton: false,
    submitButtonText: 'Save',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
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
      </UIButtonWithDrawer>
    </div>
  ),
}

export const OnlyClearButton: Story = {
  args: {
    drawerTitle: 'Clear Selection',
    triggerText: 'Clear',
    showSubmitButton: false,
    showClearButton: true,
    clearButtonText: 'Clear All',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-3 text-white">
          <p className="text-sm text-gray-400">Selected items can be cleared</p>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const BothButtons: Story = {
  args: {
    drawerTitle: 'Filter Options',
    triggerText: 'Filters',
    icon: <Filter className="size-5" />,
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Reset',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
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
      </UIButtonWithDrawer>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    drawerTitle: 'Disabled Button',
    triggerText: 'Disabled',
    icon: <Settings className="size-5" />,
    disabled: true,
    showSubmitButton: true,
    showClearButton: false,
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 text-white">
          <p>This drawer content is not accessible when disabled</p>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const CustomButtonWidth: Story = {
  args: {
    drawerTitle: 'Filters',
    icon: <SlidersHorizontal className="size-5" />,
    className: 'w-[40px]',
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Apply',
    clearButtonText: 'Clear',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-3 text-white">
          <div className="space-y-2">
            {filterOptions.map((option) => (
              <UICheckbox key={option.id} id={option.id}>
                <span className="text-sm">{option.name}</span>
              </UICheckbox>
            ))}
          </div>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const CustomButtonTexts: Story = {
  args: {
    drawerTitle: 'Фильтры',
    triggerText: 'Фильтры',
    icon: <Filter className="size-5" />,
    showSubmitButton: true,
    showClearButton: true,
    submitButtonText: 'Применить',
    clearButtonText: 'Очистить',
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 space-y-3 text-white">
          <div className="space-y-2">
            {filterOptions.map((option) => (
              <UICheckbox key={option.id} id={option.id}>
                <span className="text-sm">{option.name}</span>
              </UICheckbox>
            ))}
          </div>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

export const EmptyContent: Story = {
  args: {
    drawerTitle: 'Empty Drawer',
    triggerText: 'Open',
    showSubmitButton: true,
    showClearButton: true,
  },
  render: (args) => (
    <div className="p-5 rounded-2xl bg-[#141414]">
      <UIButtonWithDrawer {...args}>
        <div className="p-4 text-white">
          <p className="text-sm text-gray-400">No content available</p>
        </div>
      </UIButtonWithDrawer>
    </div>
  ),
}

