import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";
import ToDoColumn from "./ToDoColumn";
import ToDoItem from "./ToDoItem";
import React from "react";



const ToDoGrid = (toDoItemLists : ToDoItemLists) => {
    console.log(toDoItemLists);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <ToDoColumn value={toDoItemLists.created} name={"Created"}/>
            <ToDoColumn value={toDoItemLists.inWork} name={"In Work"}/>
            <ToDoColumn value={toDoItemLists.inReview} name={"In Review"}/>
            <ToDoColumn value={toDoItemLists.tesing} name={"Testing"}/>
            <ToDoColumn value={toDoItemLists.done} name={"Done"}/>
            
        </div>
        </>
    );
};

export default ToDoGrid;