import ToDoItemProps from "./ToDoItemProps";
import ToDoItemStatus from "./ToDoItemStatus";
import CardSettings from "../../Types/CardSettings";


const useCardSettings = (toDoItemProps: ToDoItemProps) : CardSettings => {
    
    switch (toDoItemProps.toDoItemStatus){
        case ToDoItemStatus.Created:
            return {color: "bg-[#FFD919]", statusName: "Created"};
        case ToDoItemStatus.InWork:
            return {color: "bg-[#1AC9B2]", statusName: "In Work"};
        case ToDoItemStatus.InReview:
            return {color: "bg-[#D07B1A]", statusName: "In Review" };
        case ToDoItemStatus.Testing:
            return {color: "bg-[#6E1A29]", statusName: "Testing"};
        case ToDoItemStatus.Done:
            return {color: "bg-[#19C71F]", statusName: "Done"};
        default:
            throw new Error("Unknown ToDoItem Status");
    }
    
};

export default useCardSettings;