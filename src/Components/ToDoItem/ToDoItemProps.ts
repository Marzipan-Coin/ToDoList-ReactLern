import ToDoItemStatus from "./ToDoItemStatus";

type ToDoItemProps = {
    id: string
    name: string
    text: string
    completed: boolean
    toDoItemStatus: ToDoItemStatus
};

export default ToDoItemProps;