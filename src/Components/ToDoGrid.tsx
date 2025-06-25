import ToDoItemProps from "../Types/ToDoItemProps";
import ToDoItemLists from "../Types/ToDoItems";
import ToDoItemStatus from "../Types/ToDoItemStatus";
import NamedParameter from "../Utils/NamedParameter";
import ToDoColumn from "./ToDoColumn";
import ToDoItem from "./ToDoItem";
import React from "react";

type ToDoGridProps = {
  toDoItemLists: ToDoItemLists;
  setToDoListState: React.Dispatch<React.SetStateAction<ToDoItemLists>>;
};

const ToDoGrid: React.FC<ToDoGridProps> = ({ toDoItemLists, setToDoListState }) => {
    const handleDelete = (itemToRemove: ToDoItemProps) => {
    const updatedList = { ...toDoItemLists };
    const updatedItems = GetToDoItems(updatedList, itemToRemove.toDoItemStatus)
      .filter(item => item.id !== itemToRemove.id);

    SetToDoItems(updatedList, itemToRemove.toDoItemStatus, updatedItems);
    setToDoListState(updatedList);
  };

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.created, "Created")} onDelete={handleDelete}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.inWork, "In Work")} onDelete={handleDelete}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.inReview, "In review")} onDelete={handleDelete} />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.tesing, "Testing")} onDelete={handleDelete} />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.done, "Done")} onDelete={handleDelete} />
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

const GetToDoItems = (todoItemList : ToDoItemLists, toDoItemStatus : ToDoItemStatus) => {
    switch (toDoItemStatus){
        case ToDoItemStatus.Created:
            return todoItemList.created;
        case ToDoItemStatus.Done:
            return todoItemList.done;
        case ToDoItemStatus.InReview:
            return todoItemList.inReview;
        case ToDoItemStatus.InWork:
            return todoItemList.inWork;
        case ToDoItemStatus.Testing:
            return todoItemList.tesing;
    }
};

const SetToDoItems = (todoItemList : ToDoItemLists, toDoItemStatus : ToDoItemStatus, toDoItemProps : ToDoItemProps[]) => {
    switch (toDoItemStatus){
        case ToDoItemStatus.Created:
            todoItemList.created = toDoItemProps;
            break;
        case ToDoItemStatus.Done:
            todoItemList.done = toDoItemProps;
            break;
        case ToDoItemStatus.InReview:
            todoItemList.inReview = toDoItemProps;
            break;
        case ToDoItemStatus.InWork:
            todoItemList.inWork = toDoItemProps;
            break;
            case ToDoItemStatus.Testing:
            todoItemList.tesing = toDoItemProps;
            break;
    }
};


export default ToDoGrid;