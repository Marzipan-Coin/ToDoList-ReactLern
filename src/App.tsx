import './index.css';
import ToDoItem from './Components/ToDoItem';
import ToDoItemProps from './Types/ToDoItemProps';
import ToDoItemStatus from './Types/ToDoItemStatus';

const toDoItemProps : ToDoItemProps = {
  id: "TestId",
  name: "TestName",
  text: "TestDescription",
  completed: false,
  onDelete: (id: string) => alert(`The task with id: ${id} will be deleted`),
  onToggle: (id: string) => alert(`The task with id ${id} has been toggled`),
  toDoItemStatus: ToDoItemStatus.Created
} 

export const App = () => {
  const i = 5;
  return(
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <h1 className='text-3xl font-bold text-blue-600'>
        ToDo List will be here in future!
      </h1>;

      <ToDoItem {...toDoItemProps} ></ToDoItem>
    </div>
  ); 
};
