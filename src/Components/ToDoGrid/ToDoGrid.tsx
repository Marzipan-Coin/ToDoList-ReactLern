import ToDoItemProps from "../ToDoItem/ToDoItemProps";
import ToDoItemLists from "../ToDoItem/ToDoItems";
import ToDoItemStatus from "../ToDoItem/ToDoItemStatus";
import NamedParameter from "../../Utils/NamedParameter";
import ToDoColumn from "../ToDoColumn/ToDoColumn";
import React from "react";

type ToDoGridProps = {
  toDoItemLists: ToDoItemLists;
  setToDoListState: React.Dispatch<React.SetStateAction<ToDoItemLists>>;
};

const ToDoGrid = (toDoItemLists : ToDoItemLists) => {

    return (
        <>
        <div className="min-w-[1000px] table-auto border grid grid-cols-5 gap-6">
            <ToDoColumn  {...GetParameter(toDoItemLists.created, "Created")}  />
            <ToDoColumn  {...GetParameter(toDoItemLists.inWork, "In Work")}  />
            <ToDoColumn  {...GetParameter(toDoItemLists.inReview, "In review")}  />
            <ToDoColumn  {...GetParameter(toDoItemLists.testing, "Testing")}  />
            <ToDoColumn  {...GetParameter(toDoItemLists.done, "Done")}  />
        </div>
        </>
    );
};


function GetParameter(toDoItemLists : ToDoItemProps[], paramName : string) : NamedParameter<ToDoItemProps[]>{
    return {
        name: paramName,
        value: toDoItemLists
    }
}

export default ToDoGrid;