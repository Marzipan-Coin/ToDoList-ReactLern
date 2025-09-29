import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ToDoItem from './ToDoItem';
import ToDoItemStatus from './ToDoItemStatus';

const meta = {
  component: ToDoItem,
} satisfies Meta<typeof ToDoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Created: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Created,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
    },
  };

export const InWork: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.InWork,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
  },
};

export const InReview: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.InReview,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
    },
};

export const Testing: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Testing,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
    },
};

export const Done: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Done,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
    },
};

export const CreatedWithLongName: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task with a Very Long Name",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Created,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
  },
};

export const CreatedWithLongDescription: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description with a Very Long Text that Should be Truncated",
      toDoItemStatus: ToDoItemStatus.Created,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
  },
};

export const CreatedWithLongNameAndDescription: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task with a Very Long Name",
      description: "Some Description with a Very Long Text that Should be Truncated",
      toDoItemStatus: ToDoItemStatus.Created,
      onPromote: () => {},
      onDelete: () => {},
      onCreate: () => {}
  },
};