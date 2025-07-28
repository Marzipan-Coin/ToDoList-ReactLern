import ToDoItemProps from "./ToDoItemProps";
import ToDoItemStatus from "./ToDoItemStatus";
import HoveredColor from "./HoveredColor";


const useHoveredColor = (toDoItemProps: ToDoItemProps) : HoveredColor => {
    
    switch (toDoItemProps.toDoItemStatus){
        case ToDoItemStatus.Created:
            return "hover:bg-yellow-400";
        case ToDoItemStatus.InWork:
            return "hover:bg-emerald-500";
        case ToDoItemStatus.InReview:
            return "hover:bg-orange-600";
        case ToDoItemStatus.Testing:
            return "hover:bg-rose-900";
        case ToDoItemStatus.Done:
            return "hover:bg-lime-500";
        default:
            throw new Error("Unknown ToDoItem Status");
    }
    
};

export default useHoveredColor;