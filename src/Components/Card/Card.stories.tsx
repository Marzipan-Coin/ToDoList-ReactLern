import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Card from './Card';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreatedCard: Story = {
  args: {
    name: "Card Title",
    description: "This is a description of the card.",
    id: "1",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
  }
};