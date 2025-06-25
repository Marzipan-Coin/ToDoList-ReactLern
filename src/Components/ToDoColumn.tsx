import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";
import NamedParameter from "../Utils/NamedParameter";
import Parameter from "../Utils/Parameter";
import ToDoItem from "./ToDoItem";

type toDoColumnProps = {
    toDoItemParameter: NamedParameter<ToDoItemProps[]>;
    setToDoListState: React.Dispatch<React.SetStateAction<ToDoItemLists>>;
}

const ToDoColumn : React.FC<toDoColumnProps> = ({ toDoItemParameter, setToDoListState }) => {
    
    const toDoItems = toDoItemParameter.value;
    const name = toDoItemParameter.name;

    return (
        <>
            <div className="border border-gray-800 dark:border-gray-700 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">{name}</h2>
                    <div className="space-y-4">
                        {toDoItems.map(todo => (
                            <ToDoItem toDoItemProps={todo} setToDoListState={setToDoListState}/>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default ToDoColumn;