import useCardSettings from "./useCardSettings";
import useHoveredColor from "./useHoveredColors";
import ToDoItemProps from "./ToDoItemProps";
import ToDoItemLists from "./ToDoItems";

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
            <div className={`inline-grid grid-cols-2 p-3 ml-4 gap-1 max-w-96 rounded shadow-lg overflow-hidden ${bgColor.color} dark:bg-slate-800 ${hoveredColor}`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">№ {toDoItemProps.id}</h3>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{toDoItemProps.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Description:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{toDoItemProps.text}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Status:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{toDoItemProps.toDoItemStatus}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">IsCompleted:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{toDoItemProps.completed ? "Yes" : "No"}</p>
            </div>
        </>
    );
};

export default ToDoItem;    