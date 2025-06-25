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
    console.log(toDoItemLists);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.created, "Created")}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.inWork, "In Work")}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.inReview, "In review")}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.tesing, "Testing")}  />
            <ToDoColumn setToDoListState={setToDoListState} toDoItemParameter={GetParameter(toDoItemLists.done, "Done")}  />
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

const OnDelete = (propToRemove: ToDoItemProps, todoItemList : ToDoItemLists, stateSetter: React.Dispatch<React.SetStateAction<ToDoItemLists>>) => {
    let props = GetToDoItems(todoItemList, propToRemove.toDoItemStatus);
    props = props.filter(item => !props.includes(propToRemove));

    SetToDoItems(todoItemList, propToRemove.toDoItemStatus, props);
    stateSetter(todoItemList);

};

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
    }
};


export default ToDoGrid;