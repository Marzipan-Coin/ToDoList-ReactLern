import ToDoItemProps from "../ToDoItem/ToDoItemProps";
import ToDoItemLists from "../ToDoItem/ToDoItems";
import NamedParameter from "../../Utils/NamedParameter";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoColumn = (toDoItemParameter :  NamedParameter<ToDoItemProps[]>) => {

    const toDoItems = toDoItemParameter.value;
    const name = toDoItemParameter.name;

    return (
        <>
            <div className="border w-72 border-gray-800 dark:border-gray-700 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">{name}</h2>
                    <div className="inline-grid grid-cols-1 space-y-4">
                        {toDoItems.map(todo => (
                            <ToDoItem {...todo} />
                        ))}
                    </div>
            </div>
        </>
    );
};

export default ToDoColumn;