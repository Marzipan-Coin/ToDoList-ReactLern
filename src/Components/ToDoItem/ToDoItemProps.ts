import ToDoItemStatus from "./ToDoItemStatus";

type ToDoItemProps = {
    id: string
    name: string
    description: string
    completed: boolean
    toDoItemStatus: ToDoItemStatus
    onPromote?: () => void
    onDelete?: () => void,
    onCreate?: () => void
};


export default ToDoItemProps;