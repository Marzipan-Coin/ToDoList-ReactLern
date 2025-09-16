import './index.css';
import ToDoItemProps from './Components/ToDoItem/ToDoItemProps';
import ToDoItemStatus from './Components/ToDoItem/ToDoItemStatus';
import ToDoItemLists from './Components/ToDoItem/ToDoItems';
import ToDoList from './Components/ToDoList/ToDoList';
import Header from './Components/Header/Header';
import { use, useState } from 'react';
import { Provider } from 'react-redux';
import CreateCardForm from './Components/CreateCardForm/CreateCardForm';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';


const todoItems : ToDoItemLists = {
  created: [
    {
      id: "TestId",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Created
    },
    {
      id: "TestId_1",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Created
    }
  ],
  done: [
    {
      id: "TestId",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Done
    },
    {
      id: "TestId_1",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Done
    }
  ],
  inReview: [
    {
      id: "TestId",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.InReview
    },
    {
      id: "TestId_1",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.InReview
    }
  ],
  inWork: [
    {
      id: "TestId",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.InWork
    },
    {
      id: "TestId_1",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.InWork
    }
  ],
  testing: [
    {
      id: "TestId",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Testing
    },
    {
      id: "TestId_1",
      name: "TestName",
      description: "TestDescription",
      completed: false,
      toDoItemStatus: ToDoItemStatus.Testing
    }
  ]
}

const ToDoApp = () => {

  let card = {
    id: "1",
    name: "Card Title",
    description: "This is a description of the card.",
    status: ToDoItemStatus.Created,
    completed: false
  };

  const [config, setConfig] = useState({ isTaskCreating: false, isCardOpened: false });

  const cardDefenition = (
    <>
      <Card
        id={card.id}
        name={card.name}
        description={card.description}
        toDoItemStatus={card.status}
        completed={card.completed}
        onDelete={() => {
        }}
        onPromote={() => {}}
        onCreate={() => {}}
      />
    </>
  );

  const showToDOList = () => {
    if (!config.isTaskCreating)
    {
      return (
      <div className='min-h-screen bg-black flex items-center justify-center '>
        <ToDoList
          created={todoItems.created.map(item => item)}
          inWork={todoItems.inWork.map(item => item)}
          inReview={todoItems.inReview.map(item => item)}
          testing={todoItems.testing.map(item => item)}
          done={todoItems.done.map(item => item)}
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

  const showCard = () => {
    if (config.isCardOpened) {
      return (
        <div className='min-h-screen bg-black flex items-center justify-center'>
          {cardDefenition}
        </div>
      );
    }
  }

  return(
    <>
    <div className='min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900'>
      <Header />
      {showToDOList()}
      {showCard()}
      <Footer />
    </div>
    </>
  ); 
};

export const App = () => (
    <ToDoApp />
);


