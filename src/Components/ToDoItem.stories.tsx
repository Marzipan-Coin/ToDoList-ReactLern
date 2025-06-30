import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ToDoItem from './ToDoItem';
import ToDoItemProps from '../Types/ToDoItemProps';
import ToDoItemLists from '../Types/ToDoItems';
import ToDoItemStatus from '../Types/ToDoItemStatus';

const meta = {
  component: ToDoItem,
} satisfies Meta<typeof ToDoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Created: Story = {
  args: {
    toDoItemProps: {
      completed: false,
      id: "1",
      name: "Some Task",
      onDelete: (x) => { alert(x) },
      onToggle: (x) => { alert(x) },
      text: "Some Description",
      toDoItemStatus: ToDoItemStatus.Created
    },
    onDelete: (x) => { },
    setToDoListState: (x) => { }
  },
};

export const InWork: Story = {
  args: {
    toDoItemProps: {
      completed: false,
      id: "1",
      name: "Some Task",
      onDelete: (x) => { alert(x) },
      onToggle: (x) => { alert(x) },
      text: "Some Description",
      toDoItemStatus: ToDoItemStatus.InWork
    },
    onDelete: (x) => { },
    setToDoListState: (x) => { }
  },
};

export const InReview: Story = {
  args: {
    toDoItemProps: {
      completed: false,
      id: "1",
      name: "Some Task",
      onDelete: (x) => { alert(x) },
      onToggle: (x) => { alert(x) },
      text: "Some Description",
      toDoItemStatus: ToDoItemStatus.InReview
    },
    onDelete: (x) => { },
    setToDoListState: (x) => { }
  },
};

export const Testing: Story = {
  args: {
    toDoItemProps: {
      completed: false,
      id: "1",
      name: "Some Task",
      onDelete: (x) => { alert(x) },
      onToggle: (x) => { alert(x) },
      text: "Some Description",
      toDoItemStatus: ToDoItemStatus.Testing
    },
    onDelete: (x) => { },
    setToDoListState: (x) => { }
  },
};

export const Done: Story = {
  args: {
    toDoItemProps: {
      completed: false,
      id: "1",
      name: "Some Task",
      onDelete: (x) => { alert(x) },
      onToggle: (x) => { alert(x) },
      text: "Some Description",
      toDoItemStatus: ToDoItemStatus.Done
    },
    onDelete: (x) => { },
    setToDoListState: (x) => { }
  },
};