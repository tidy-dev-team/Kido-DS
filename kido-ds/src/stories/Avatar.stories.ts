import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../avatar/Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['picture', 'initials'],
      description: 'Type of avatar display',
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
      description: 'Shape of the avatar',
    },
    size: {
      control: 'select',
      options: ['24', '32', '40', '52', '64'],
      description: 'Size of the avatar in pixels',
    },
    imageUrl: {
      control: 'text',
      description: 'URL of the avatar image (for picture type)',
    },
    initials: {
      control: 'text',
      description: 'User initials (for initials type)',
    },
    upperBadge: {
      control: 'boolean',
      description: 'Show red badge in upper right corner',
    },
    lowerBadge: {
      control: 'boolean',
      description: 'Show green badge in lower right corner',
    },
    outline: {
      control: 'boolean',
      description: 'Show white outline ring',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with initials
export const Default: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'circle',
    size: '40',
  },
};

// Picture avatar
export const WithPicture: Story = {
  args: {
    type: 'picture',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    shape: 'circle',
    size: '40',
  },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithInitials: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'circle',
    size: '40',
  },
};

export const Small: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'circle',
    size: '24',
  },
};

export const Large: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'circle',
    size: '64',
  },
};

export const Rounded: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'rounded',
    size: '40',
  },
};

export const Square: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    shape: 'square',
    size: '40',
  },
};