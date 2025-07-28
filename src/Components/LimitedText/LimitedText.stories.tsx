import type { Meta, StoryObj } from '@storybook/react-webpack5';

import LimitedText from './LimitedText';

const meta = {
  component: LimitedText,
} satisfies Meta<typeof LimitedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Truncated_30_Symbols: Story = {
  args: {
    text: "This is a long text that should be truncated",
    limit: 30,
  }
};
export const Full_Text_20_Symbols: Story = {
  args: {
    text: "Short text",
    limit: 20,
  }
};
export const Full_Text_30_Symbols: Story = {
  args: {
    text: "Short text",
    limit: 30,
  }
};

export const Truncated_20_Symbols: Story = {
  args: {
    text: "This is a long text that should be truncated",
    limit: 20,
  }
};

export const Empty_Text: Story = {
  args: {
    text: "",
    limit: 30,
  }
};