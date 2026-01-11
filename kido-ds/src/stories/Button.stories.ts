import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../button/Button';
import { IconPlus, IconArrowRight, IconDownload, IconTrash } from '@tabler/icons-react';

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
    iconL: {
      control: false,
      description: 'Left icon',
    },
    iconR: {
      control: false,
      description: 'Right icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    size: 'm',
    variant: 'contained',
  },
  render: (args) => React.createElement(Button, { ...args, iconL: React.createElement(IconPlus) }),
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
