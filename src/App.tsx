import './index.css';
import ToDoItemProps from './Components/ToDoItem/ToDoItemProps';
import ToDoItemStatus from './Components/ToDoItem/ToDoItemStatus';
import ToDoItemLists from './Components/ToDoItem/ToDoItems';
import ToDoList from './Components/ToDoList/ToDoList';
import Header from './Components/Header/Header';
import { useState } from 'react';

const toDoItemProps : ToDoItemProps[] = [{
  id: "TestId",
  name: "TestName",
  text: "TestDescription",
  completed: false,
  toDoItemStatus: ToDoItemStatus.Created
},
{
  id: "TestId1",
  name: "TestName1",
  text: "TestDescription1",
  completed: false,
  toDoItemStatus: ToDoItemStatus.InWork
}]

const toDoItemLists : ToDoItemLists = {
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
