import ToDoItemStatus from "./ToDoItemStatus";

type ToDoItemProps = {
    id: string
    name: string
    description: string
    completed: boolean
    toDoItemStatus: ToDoItemStatus
    onPromote?: (id: string) => void
    onDelete?: (item: ToDoItemProps) => void
};


export default ToDoItemProps;