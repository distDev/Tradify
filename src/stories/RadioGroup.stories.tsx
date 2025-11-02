import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcn/radio-group'

const meta = {
  title: 'Shared/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all radio items',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
]

export const Default: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <RadioGroupItem value={option.value} id={`r-${option.value}`} />
            <label htmlFor={`r-${option.value}`} className="cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
}

export const NoDefaultValue: Story = {
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <RadioGroupItem value={option.value} id={`r-${option.value}`} />
            <label htmlFor={`r-${option.value}`} className="cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
}

export const WithDisabled: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        {options.map((option, index) => (
          <div key={option.value} className="flex items-center gap-3">
            <RadioGroupItem
              value={option.value}
              id={`r-${option.value}`}
              disabled={index === 2}
            />
            <label
              htmlFor={`r-${option.value}`}
              className={`cursor-pointer ${index === 2 ? 'opacity-50' : ''}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
}

export const SingleItem: Story = {
  args: {
    defaultValue: 'single',
  },
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="single" id="r-single" />
          <label htmlFor="r-single" className="cursor-pointer">
            Single Option
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const ManyOptions: Story = {
  args: {
    defaultValue: 'option-5',
  },
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        {Array.from({ length: 10 }, (_, i) => {
          const value = `option-${i + 1}`
          return (
            <div key={value} className="flex items-center gap-3">
              <RadioGroupItem value={value} id={`r-${value}`} />
              <label htmlFor={`r-${value}`} className="cursor-pointer">
                Option {i + 1}
              </label>
            </div>
          )
        })}
      </RadioGroup>
    </div>
  ),
}

export const CustomGap: Story = {
  args: {
    defaultValue: 'comfortable',
    className: 'gap-6',
  },
  render: (args) => (
    <div className="text-white bg-[#272727] p-6 rounded-md">
      <RadioGroup {...args}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <RadioGroupItem value={option.value} id={`r-${option.value}`} />
            <label htmlFor={`r-${option.value}`} className="cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
}

