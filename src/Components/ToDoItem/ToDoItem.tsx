import useCardSettings from "./useCardSettings";
import useHoveredColor from "./useHoveredColors";
import ToDoItemProps from "./ToDoItemProps";
import ToDoItemLists from "./ToDoItems";
import LimitedText from "../LimitedText/LimitedText";

type ToDoItemParamProps = {
  toDoItemProps: ToDoItemProps;
  setToDoListState: React.Dispatch<React.SetStateAction<ToDoItemLists>>;
    onDelete: (item: ToDoItemProps) => void;
}

const ToDoItem = (toDoItemProps : ToDoItemProps) => {
    const bgColor = useCardSettings(toDoItemProps);
    const hoveredColor = useHoveredColor(toDoItemProps);


    return (
        <>
            <div 
            className={`inline-grid grid-cols-2 p-3 ml-4 gap-1 max-w-60 rounded shadow-lg overflow-hidden ${bgColor.color} dark:bg-slate-800 ${hoveredColor} mb-2`}
            onClick = {() => {
                if (toDoItemProps.onCreate) toDoItemProps.onCreate();
            }}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">№ <LimitedText text={toDoItemProps.id} limit={8} /></h3>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white"><LimitedText text={toDoItemProps.name} limit={20} /></h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Description:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400"><LimitedText text={toDoItemProps.description} limit={20} /></p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Status:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{toDoItemProps.toDoItemStatus}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">IsCompleted:</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{toDoItemProps.completed ? "Yes" : "No"}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                 onClick={() => { if (toDoItemProps.onDelete) toDoItemProps.onDelete(); }}>
                    Delete
                </button>
            </div>
        </>
    );
};

export default ToDoItem;    