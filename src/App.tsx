import './index.css';
import ToDoItem from './Components/ToDoItem';
import ToDoItemProps from './Types/ToDoItemProps';
import ToDoItemStatus from './Types/ToDoItemStatus';
import ToDoGrid from './Components/ToDoGrid';
import ToDoItemLists from './Types/ToDoItems';
import ToDoList from './Components/ToDoList';
import Header from './Components/Header';
import { useState } from 'react';

const toDoItemProps : ToDoItemProps[] = [{
  id: "TestId",
  name: "TestName",
  text: "TestDescription",
  completed: false,
  onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
  onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
  toDoItemStatus: ToDoItemStatus.Created
},
{
  id: "TestId1",
  name: "TestName1",
  text: "TestDescription1",
  completed: false,
  onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
  onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
  toDoItemStatus: ToDoItemStatus.InWork
}]

const toDoItemLists : ToDoItemLists = {
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
  ]

}

export const App = () => {
  const [todoItemListState, setTodoItemListState] = useState(toDoItemLists);
  const [isCreateCardFormShown, setCreateCardFormShown] = useState(false);

  const createFormShowHandler = () => setCreateCardFormShown(!isCreateCardFormShown);

  const showToDOList = () => {
    if (isCreateCardFormShown)
    {
      return (
      <div className='min-h-screen bg-black flex items-center justify-center '>
        <ToDoList {...toDoItemLists} />
      </div>
      );
    }
  }

  return(
    <>
    <div className='min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900'>
      <Header createClickHandler={createFormShowHandler} />
      {showToDOList()}
    </div>
    </>
    
  ); 
};
