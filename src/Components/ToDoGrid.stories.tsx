import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ToDoGrid from './ToDoGrid';
import ToDoItemLists from '../Types/ToDoItems';
import ToDoItemStatus from '../Types/ToDoItemStatus';

const meta = {
  component: ToDoGrid,
} satisfies Meta<typeof ToDoGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoItemLists: {
      created: [
        {
          id: "TestId",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Created
        },
        {
          id: "TestId_1",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Created
        }
      ],
      inWork: [
        {
          id: "TestId",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.InWork
        },
        {
          id: "TestId_1",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.InWork
        }
      ],
      inReview: [
        {
          id: "TestId",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.InReview
        },
        {
          id: "TestId_1",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.InReview
        }
      ],
      tesing: [
        {
          id: "TestId",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Testing
        },
        {
          id: "TestId_1",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Testing
        }
      ],
      done: [
        {
          id: "TestId",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Done
        },
        {
          id: "TestId_1",
          name: "TestName",
          text: "TestDescription",
          completed: false,
          onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
          onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
          toDoItemStatus: ToDoItemStatus.Done
        }
      ]
    },
    setToDoListState: (x) => {}
  }
};