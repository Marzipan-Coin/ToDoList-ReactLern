import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ToDoList from '../ToDoList/ToDoList';
import ToDoItemStatus from '../ToDoItem/ToDoItemStatus';

const meta = {
  component: ToDoList,
} satisfies Meta<typeof ToDoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    created: [
      {
        id: "TestId",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Created
      },
      {
        id: "TestId_1",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Created
      }
    ],
    inWork: [
      {
        id: "TestId",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.InWork
      },
      {
        id: "TestId_1",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.InWork
      }
    ],
    inReview: [
      {
        id: "TestId",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.InReview
      },
      {
        id: "TestId_1",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.InReview
      }
    ],
    tesing: [
      {
        id: "TestId",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Testing
      },
      {
        id: "TestId_1",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Testing
      }
    ],
    done: [
      {
        id: "TestId",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Done
      },
      {
        id: "TestId_1",
        name: "TestName",
        text: "TestDescription",
        completed: false,
        toDoItemStatus: ToDoItemStatus.Done
      }
    ],
  }
};