import type { Meta, StoryObj } from '@storybook/react'
import { UITabs } from '@/shared'

const meta = {
  title: 'Shared/UITabs',
  component: UITabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab objects with value, label, and content',
    },
    defaultValue: {
      control: 'text',
      description: 'Default active tab value',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof UITabs>

export default meta

type Story = StoryObj<typeof meta>

const sampleTabs = [
  {
    value: 'tab1',
    label: 'Overview',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Overview Content</h3>
        <p className="text-muted-foreground">
          This is the overview tab content. It can contain any React elements.
        </p>
      </div>
    ),
  },
  {
    value: 'tab2',
    label: 'Details',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Details Content</h3>
        <p className="text-muted-foreground">
          This is the details tab content with more information.
        </p>
        <ul className="mt-2 space-y-1">
          <li>• Feature 1</li>
          <li>• Feature 2</li>
          <li>• Feature 3</li>
        </ul>
      </div>
    ),
  },
  {
    value: 'tab3',
    label: 'Settings',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Settings Content</h3>
        <p className="text-muted-foreground">
          This is the settings tab content with configuration options.
        </p>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
}

export const WithDefaultValue: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'tab2',
  },
}

export const TwoTabs: Story = {
  args: {
    tabs: [
      {
        value: 'first',
        label: 'First Tab',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">First Tab</h3>
            <p className="text-muted-foreground">Content of the first tab.</p>
          </div>
        ),
      },
      {
        value: 'second',
        label: 'Second Tab',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Second Tab</h3>
            <p className="text-muted-foreground">Content of the second tab.</p>
          </div>
        ),
      },
    ],
  },
}

export const ManyTabs: Story = {
  args: {
    tabs: [
      {
        value: 'home',
        label: 'Home',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Home</h3>
            <p className="text-muted-foreground">Welcome to the home page.</p>
          </div>
        ),
      },
      {
        value: 'about',
        label: 'About',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground">Learn more about us.</p>
          </div>
        ),
      },
      {
        value: 'services',
        label: 'Services',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <p className="text-muted-foreground">Our available services.</p>
          </div>
        ),
      },
      {
        value: 'portfolio',
        label: 'Portfolio',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <p className="text-muted-foreground">View our work.</p>
          </div>
        ),
      },
      {
        value: 'contact',
        label: 'Contact',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-muted-foreground">Get in touch with us.</p>
          </div>
        ),
      },
    ],
  },
}

export const WithCustomClassName: Story = {
  args: {
    tabs: sampleTabs,
    className: 'w-96',
  },
}
