import type { Meta, StoryObj } from '@storybook/react';
import { SearchIcon } from 'lucide-react';

import { UIInput } from '@/shared';

const meta = {
  title: 'Shared/UIInput',
  component: UIInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    icon: {
      control: false,
      description: 'Icon component to display inside the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
  },
} satisfies Meta<typeof UIInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: <SearchIcon size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithIconAndDisabled: Story = {
  args: {
    placeholder: 'Search...',
    icon: <SearchIcon size={16} />,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Error state',
    'aria-invalid': true,
  },
};
