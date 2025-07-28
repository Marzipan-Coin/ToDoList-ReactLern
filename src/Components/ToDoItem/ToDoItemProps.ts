import ToDoItemStatus from "./ToDoItemStatus";

type ToDoItemProps = {
    id: string
    name: string
    description: string
    completed: boolean
    toDoItemStatus: ToDoItemStatus
};

export default ToDoItemProps;