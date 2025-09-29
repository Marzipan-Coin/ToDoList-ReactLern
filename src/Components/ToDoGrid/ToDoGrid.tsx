import ToDoItemProps from "../ToDoItem/ToDoItemProps";
import ToDoItemLists from "../ToDoItem/ToDoItemList";
import NamedParameter from "../../Utils/NamedParameter";
import ToDoColumn from "../ToDoColumn/ToDoColumn";

const ToDoGrid = (toDoItemLists : ToDoItemLists) => {

    return (
        <>
        <div className="min-w-[1000px] table-auto border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            <ToDoColumn key='created'  {...GetParameter(toDoItemLists.created, "Created")}  />
            <ToDoColumn key='inWork'  {...GetParameter(toDoItemLists.inWork, "In Work")}  />
            <ToDoColumn key='inReview'  {...GetParameter(toDoItemLists.inReview, "In review")}  />
            <ToDoColumn key='testing'  {...GetParameter(toDoItemLists.testing, "Testing")}  />
            <ToDoColumn key='done'  {...GetParameter(toDoItemLists.done, "Done")}  />
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