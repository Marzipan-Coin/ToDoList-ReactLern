import './index.css';
import ToDoItemLists from './Components/ToDoItem/ToDoItemList';
import ToDoList from './Components/ToDoList/ToDoList';
import Header from './Components/Header/Header';
import { useState } from 'react';
import CreateCardForm from './Components/CreateCardForm/CreateCardForm';
import Footer from './Components/Footer/Footer';
import MockToDoGenerate from './Components/ToDoItem/MockToDoGenerator';

const CreateMockToDoItem = () : ToDoItemLists => {
  return MockToDoGenerate({createdCount: 3, inWorkCount: 2, inReviewCount: 1, testingCount: 4, doneCount: 5});
}
const ToDoApp = () => {

  const [todoItems, setToDoItems] = useState<ToDoItemLists>(CreateMockToDoItem());
  const [isCreatingModalOpen, setIsCreatingModalOpen] = useState<boolean>(false);

  return(
    <>
    <div className='min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900'>
      <Header setIsCreatingModalOpen={setIsCreatingModalOpen} />
      
      {isCreatingModalOpen && 
        <CreateCardForm onClose={() => setIsCreatingModalOpen(false)} isOpen={isCreatingModalOpen} />
      }

      <ToDoList
        created={todoItems.created}
        inWork={todoItems.inWork}
        inReview={todoItems.inReview}
        testing={todoItems.testing}
        done={todoItems.done}
      />
      <Footer />
    </div>
    </>
  ); 
};

export const App = () => (
    <ToDoApp />
);


// See UseContext for configuration of modal window in the future