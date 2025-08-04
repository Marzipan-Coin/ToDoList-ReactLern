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
      toDoItemStatus: ToDoItemStatus.Created
    },
  };

export const InWork: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.InWork
  },
};

export const InReview: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.InReview
    },
};

export const Testing: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Testing
    },
};

export const Done: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Done
    
  },
};

export const CreatedWithLongName: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task with a Very Long Name",
      description: "Some Description",
      toDoItemStatus: ToDoItemStatus.Created
  },
};

export const CreatedWithLongDescription: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task",
      description: "Some Description with a Very Long Text that Should be Truncated",
      toDoItemStatus: ToDoItemStatus.Created
  },
};

export const CreatedWithLongNameAndDescription: Story = {
  args: {
      completed: false,
      id: "1",
      name: "Some Task with a Very Long Name",
      description: "Some Description with a Very Long Text that Should be Truncated",
      toDoItemStatus: ToDoItemStatus.Created
  },
};