import { useState } from "react";
import ToDoItemLists from "../Types/ToDoItems";
import ToDoGrid from "./ToDoGrid";

const ToDoList = (toDoItemLists : ToDoItemLists) => {
    const [toDoListState, setToDoListState] = useState(toDoItemLists);

    return (
        <>
            <div className="min-h-screen bg-slate-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 border border-gray-800 dark:border-gray-700 rounded-md">
                <ToDoGrid setToDoListState={setToDoListState} toDoItemLists={toDoListState}/>
            </div>
        </>
    );
};

export default ToDoList;