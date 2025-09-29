import ToDoItemProps from "./ToDoItemProps"

type ToDoItemLists = {
    created: ToDoItemProps[]
    inWork: ToDoItemProps[]
    inReview: ToDoItemProps[]
    testing: ToDoItemProps[]
    done: ToDoItemProps[]
};

export default ToDoItemLists;