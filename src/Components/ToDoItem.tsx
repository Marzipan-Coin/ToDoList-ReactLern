import useCardSettings from "../Hooks/useCardSettings";
import useHoveredColor from "../Hooks/useHoveredColors";
import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";

type ToDoItemParamProps = {
  toDoItemProps: ToDoItemProps;
  setToDoListState: React.Dispatch<React.SetStateAction<ToDoItemLists>>;
    onDelete: (item: ToDoItemProps) => void;
}

const ToDoItem: React.FC<ToDoItemParamProps> = ({ toDoItemProps, setToDoListState, onDelete }) => {
    var bgColor = useCardSettings(toDoItemProps);
    var hoveredColor = useHoveredColor(toDoItemProps);


    return (
        <>
            <div className={`max-w-sm rounded-xl shadow-lg overflow-hidden ${bgColor.color} dark:bg-slate-800 ${hoveredColor}`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{toDoItemProps.id} --- {toDoItemProps.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Description: {toDoItemProps.text}</p>
                <p>Status: {bgColor.statusName}</p>
                <p>IsCompleted: {toDoItemProps.completed}</p>
                <button onClick={() => onDelete(toDoItemProps)}>Delete</button>
            </div>
        </>
    );
};

export default ToDoItem;    