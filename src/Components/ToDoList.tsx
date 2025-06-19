import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";
import ToDoItem from "./ToDoItem";
import React from "react";



const ToDoList = (toDoItemLists : ToDoItemLists) => {
    console.log(toDoItemLists);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">Created</h2>
                <div className="space-y-4">
                    {toDoItemLists.created.map(todo => (
                        <ToDoItem key={todo.id} {...todo} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">In Work</h2>
                <div className="space-y-4">
                    {toDoItemLists.inWork.map(todo => (
                        <ToDoItem key={todo.id} {...todo} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">In Review</h2>
                <div className="space-y-4">
                    {toDoItemLists.inReview.map(todo => (
                        <ToDoItem key={todo.id} {...todo} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">Testing</h2>
                <div className="space-y-4">
                    {toDoItemLists.tesing.map(todo => (
                        <ToDoItem key={todo.id} {...todo} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-700">Done</h2>
                <div className="space-y-4">
                    {toDoItemLists.done.map(todo => (
                        <ToDoItem key={todo.id} {...todo} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ToDoList;