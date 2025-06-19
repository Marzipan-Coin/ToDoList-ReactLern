import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";
import NamedParameter from "../Utils/NamedParameter";
import Parameter from "../Utils/Parameter";
import ToDoItem from "./ToDoItem";


const ToDoColumn = (toDoItemsParameter : NamedParameter<ToDoItemProps[]>) => {
    
    const toDoItems = toDoItemsParameter.value;
    const name = toDoItemsParameter.name;

    return (
        <>
            <div className="border border-gray-800 dark:border-gray-700 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">{name}</h2>
                    <div className="space-y-4">
                        {toDoItems.map(todo => (
                            <ToDoItem key={todo.id} {...todo} />
                        ))}
                    </div>
            </div>
        </>
    );
};

export default ToDoColumn;