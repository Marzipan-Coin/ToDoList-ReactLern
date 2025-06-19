import useCardSettings from "../Hooks/useCardSettings";
import ToDoItemProps from "../Types/ToDoItemProps";

const ToDoItem = (toDoItemProps: ToDoItemProps  ) => {
    var bgColor = useCardSettings(toDoItemProps);


    return (
        <>
            <div className={`max-w-sm rounded-xl shadow-lg overflow-hidden ${bgColor.color} dark:bg-slate-800`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{toDoItemProps.id} --- {toDoItemProps.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Description: {toDoItemProps.text}</p>
                <p>Status: {bgColor.statusName}</p>
                <p>IsCompleted: {toDoItemProps.completed}</p>
            </div>
        </>
    );
};

export default ToDoItem;