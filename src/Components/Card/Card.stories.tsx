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
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithLongName: Story = {
  args: {
    name: "This is a very long card title that exceeds the usual length",
    description: "This is a description of the card.",
    id: "2",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWith1000CharactersName: Story = {
  args: {
    name: "A".repeat(1000), // 1000 characters long name
    description: "This is a description of the card.",
    id: "3",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithLongDescription: Story = {
  args: {
    name: "Card Title",
    description: "This is a very long description that exceeds the usual length. It goes on and on, providing more details about the card and its contents than one would typically expect.",
    id: "4",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithLongNameAndDescription: Story = {
  args: {
    name: "This is a very long card title that exceeds the usual length",
    description: "This is a very long description that exceeds the usual length. It goes on and on, providing more details about the card and its contents than one would typically expect.",
    id: "5",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithLongNameAndDescriptionAnd1000Characters: Story = {
  args: {
    name: "A".repeat(1000), // 1000 characters long name
    description: "This is a very long description that exceeds the usual length. It goes on and on, providing more details about the card and its contents than one would typically expect.",
    id: "6",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithLongId : Story = {
  args: {
    name: "Card Title",
    description: "This is a description of the card.",
    id: "A".repeat(1000), // 1000 characters long id
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};

export const CreatedCardWithOneLongDescriptionAndOneLongNameWithoutSpaces: Story = {
  args: {
    name: "A".repeat(1000), // 1000 characters long name
    description: "B".repeat(1000), // 1000 characters long description
    id: "7",
    toDoItemStatus: 1, // Assuming 1 corresponds to Created status
    completed: false,
    onPromote: () => {},
    onDelete: () => {},
    onCreate: () => {}
  }
};
