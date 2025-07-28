import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Footer from './Footer';

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    createClickHandler: () => { alert("Create button clicked") }
    // No specific args needed for the empty state
  }
};