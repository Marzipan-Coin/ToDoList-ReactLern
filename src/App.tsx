import './index.css';
import ToDoItemStatus from './Components/ToDoItem/ToDoItemStatus';
import ToDoItemLists from './Components/ToDoItem/ToDoItemList';
import ToDoList from './Components/ToDoList/ToDoList';
import Header from './Components/Header/Header';
import { useState } from 'react';
import CreateCardForm from './Components/CreateCardForm/CreateCardForm';
import Footer from './Components/Footer/Footer';
import MockToDoListBuilder from './Components/ToDoItem/MockToDoListBuilder';
import MockToDoItemBuilder from './Components/ToDoItem/MockToDoItemBuilder';

const CreateMockToDoItem = () : ToDoItemLists => {
  const list = MockToDoListBuilder
    .SetToCreated(MockToDoItemBuilder
      .SetId("1")
      .SetName("Created Task")
      .SetDescription("This is a created task")
      .SetToDoItemStatus(ToDoItemStatus.Created)
      .SetCompleted(false)
      .Build())
    .SetToCreated(MockToDoItemBuilder
      .SetId("2")
      .SetName("Second Created Task")
      .SetDescription("This is a second created task")
      .SetToDoItemStatus(ToDoItemStatus.Created)
      .SetCompleted(false)
      .Build())
    .SetToInWork(MockToDoItemBuilder
      .SetId("3")
      .SetName("In Work Task")
      .SetDescription("This is an in work task")
      .SetToDoItemStatus(ToDoItemStatus.InWork)
      .SetCompleted(false)
      .Build())
    .SetToInWork(MockToDoItemBuilder
      .SetId("4")
      .SetName("Second In Work Task")
      .SetDescription("This is a second in work task")
      .SetToDoItemStatus(ToDoItemStatus.InWork)
      .SetCompleted(false)
      .Build())
    .SetToInWork(MockToDoItemBuilder
      .SetId("5")
      .SetName("Third In Work Task")
      .SetDescription("This is a third in work task")
      .SetToDoItemStatus(ToDoItemStatus.InWork)
      .SetCompleted(false)
      .Build())
    .SetToInReview(MockToDoItemBuilder
      .SetId("6")
      .SetName("In Review Task")
      .SetDescription("This is an in review task")
      .SetToDoItemStatus(ToDoItemStatus.InReview)
      .SetCompleted(false)
      .Build())
    .SetToTesting(MockToDoItemBuilder
      .SetId("7")
      .SetName("Testing Task")
      .SetDescription("This is a testing task")
      .SetToDoItemStatus(ToDoItemStatus.Testing)
      .SetCompleted(false)
      .Build())
    .SetToDone(MockToDoItemBuilder
      .SetId("8")
      .SetName("Done Task")
      .SetDescription("This is a done task")
      .SetToDoItemStatus(ToDoItemStatus.Done)
      .SetCompleted(false)
      .Build());

  return list.Build();
}

const ToDoApp = () => {

  const [todoItems, setToDoItems] = useState<ToDoItemLists>(CreateMockToDoItem());

  return(
    <>
    <div className='min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900'>
      <Header />
      <ToDoList
        created={todoItems.created.map(item => item)}
        inWork={todoItems.inWork.map(item => item)}
        inReview={todoItems.inReview.map(item => item)}
        testing={todoItems.testing.map(item => item)}
        done={todoItems.done.map(item => item)}
      />
      <Footer />
    </div>
    </>
  ); 
};

export const App = () => (
    <ToDoApp />
);


