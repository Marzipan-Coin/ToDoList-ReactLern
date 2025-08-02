import type { Meta, StoryObj } from '@storybook/react-webpack5';

import SpacedText from './SpacedText';

const meta = {
  component: SpacedText,
} satisfies Meta<typeof SpacedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Truncated_30_Symbols: Story = {
  args: {
    text: "Thisisalongtextthatshouldbetruncated",
    interval: 30,
  }
};
export const Full_Text_20_Symbols: Story = {
  args: {
    text: "Short text",
    interval: 20,
  }
};
export const Full_Text_30_Symbols: Story = {
  args: {
    text: "Short text",
    interval: 30,
  }
};

export const Truncated_20_Symbols: Story = {
  args: {
    text: "Thisisalongtextthatshouldbetruncated",
    interval: 20,
  }
};

export const Empty_Text: Story = {
  args: {
    text: "",
    interval: 30,
  }
};