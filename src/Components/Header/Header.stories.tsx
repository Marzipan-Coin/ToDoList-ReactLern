import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Header from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    createClickHandler: () => { alert("Create button clicked") }
    // No specific args needed for the empty state
  }
};