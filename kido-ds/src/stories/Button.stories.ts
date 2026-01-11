import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../button/Button';
import { 
  IconPlus, 
  IconArrowRight, 
  IconArrowLeft,
  IconDownload, 
  IconTrash, 
  IconCheck, 
  IconX 
} from '@tabler/icons-react';

// Icon mapping for dropdown
const iconMap = {
  none: undefined,
  plus: React.createElement(IconPlus),
  arrow: React.createElement(IconArrowRight),
  backarrow: React.createElement(IconArrowLeft),
  download: React.createElement(IconDownload),
  trash: React.createElement(IconTrash),
  check: React.createElement(IconCheck),
  x: React.createElement(IconX),
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Size of the button',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'ghost'],
      description: 'Visual style variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Playground with icon dropdowns
export const Playground: Story = {
  argTypes: {
    iconL: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Select left icon',
    },
    iconR: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Select right icon',
    },
  } as any,
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
    disabled: false,
    iconL: 'none',
    iconR: 'none',
  } as any,
  render: (args: any) => {
    const { iconL, iconR, ...buttonProps } = args;
    return React.createElement(Button, {
      ...buttonProps,
      iconL: iconMap[iconL as keyof typeof iconMap],
      iconR: iconMap[iconR as keyof typeof iconMap],
    });
  },
};

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
    disabled: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
  },
  render: (args) => React.createElement(Button, { ...args, iconL: React.createElement(IconPlus) }),
};

export const withRightIcon: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
  },
  render: (args) => React.createElement(Button, { ...args, iconR: React.createElement(IconArrowRight) }),
};

export const withBothIcons: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
  },
  render: (args) => React.createElement(Button, { ...args, iconL: React.createElement(IconPlus), iconR: React.createElement(IconArrowRight) }),
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'l',
    variant: 'contained',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 's',
    variant: 'contained',
  },
};

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const GhostWithIcon: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
  render: (args) => React.createElement(Button, { ...args, iconL: React.createElement(IconDownload) }),
};