import './index.css';
import ToDoItemProps from './Components/ToDoItem/ToDoItemProps';
import ToDoItemStatus from './Components/ToDoItem/ToDoItemStatus';
import ToDoItemLists from './Components/ToDoItem/ToDoItems';
import ToDoList from './Components/ToDoList/ToDoList';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppDispatch, useAppSelector } from './store/hook';
import { addTodo } from './store/todoSlice';
import CreateCardForm from './Components/CreateCardForm/CreateCardForm';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';


// const toDoItemLists : ToDoItemLists = {
//   created: [
//     {
//       id: "TestId",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Created
//     },
//     {
//       id: "TestId_1",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Created
//     }
//   ],
//   done: [
//     {
//       id: "TestId",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Done
//     },
//     {
//       id: "TestId_1",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Done
//     }
//   ],
//   inReview: [
//     {
//       id: "TestId",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.InReview
//     },
//     {
//       id: "TestId_1",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.InReview
//     }
//   ],
//   inWork: [
//     {
//       id: "TestId",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.InWork
//     },
//     {
//       id: "TestId_1",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.InWork
//     }
//   ],
//   testing: [
//     {
//       id: "TestId",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Testing
//     },
//     {
//       id: "TestId_1",
//       name: "TestName",
//       text: "TestDescription",
//       completed: false,
//       toDoItemStatus: ToDoItemStatus.Testing
//     }
//   ]
// }

const ToDoApp = () => {
  const todoItems = useAppSelector(state => state.todos);
  const config = useAppSelector(state => state.config);

  const cardDefenition = (
    <>
      <Card
        id="1"
        name="Card Title"
        description="This is a description of the card."
        toDoItemStatus={1} // Assuming 1 corresponds to Created status
        completed={false}
      />
    </>
  );

  const showToDOList = () => {
    if (!config.isTaskCreating)
    {
      return (
      <div className='min-h-screen bg-black flex items-center justify-center '>
        <ToDoList
          created={todoItems.created.map(item => item.ToDoItem)}
          inWork={todoItems.inWork.map(item => item.ToDoItem)}
          inReview={todoItems.inReview.map(item => item.ToDoItem)}
          testing={todoItems.testing.map(item => item.ToDoItem)}
          done={todoItems.done.map(item => item.ToDoItem)}
        />
      </div>
      );
    }
    else {
      return (
        <CreateCardForm />
      );
    }
  }

  return(
    <>
    <div className='min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900'>
      <Header />
      {showToDOList()}
      <Footer />
    </div>
    </>
  ); 
};

export const App = () => (
  <Provider store={store}>
    <ToDoApp />
  </Provider>
);


