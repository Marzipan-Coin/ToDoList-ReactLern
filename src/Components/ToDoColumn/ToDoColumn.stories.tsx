import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ToDoColumn from './ToDoColumn';
import ToDoItemStatus from '../ToDoItem/ToDoItemStatus';

const meta = {
  component: ToDoColumn,
} satisfies Meta<typeof ToDoColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
      name: "Some Parameter",
      value: [
      ]
    },
};

export const OneElement: Story = {
  args: {
      name: "Some Parameter",
      value: [
        {
          completed: false,
          id: "1",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        }
      ]
  }
};

export const FiveElement: Story = {
  args: {
      name: "Some Parameter",
      value: [
        {
          completed: false,
          id: "1",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        },
        {
          completed: false,
          id: "2",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        },
        {
          completed: false,
          id: "3",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        },
        {
          completed: false,
          id: "4",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        },
        {
          completed: false,
          id: "5",
          name: "Some Name",
          text: "Some Text",
          toDoItemStatus: ToDoItemStatus.Created
        },
      ]
    },
};