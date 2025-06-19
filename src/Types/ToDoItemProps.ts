import ToDoItemStatus from "./ToDoItemStatus";

type ToDoItemProps = {
    id: string
    name: string
    text: string
    completed: boolean
    toDoItemStatus: ToDoItemStatus
    onToggle: (id: string) => void
    onDelete: (id: string) => void
};

export default ToDoItemProps;