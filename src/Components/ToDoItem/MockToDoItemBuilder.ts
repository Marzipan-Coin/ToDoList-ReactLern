import ToDoItemStatus from "./ToDoItemStatus";

const MockToDoItemBuilder = {
    id: '0',
    name: 'Default Task',
    description: 'Default Description',
    completed: false,
    toDoItemStatus: ToDoItemStatus.Created,
    SetId(id: string) {
        this.id = id;
        return this;
    },
    SetName(name: string) {
        this.name = name;
        return this;
    },
    SetDescription(description: string) {
        this.description = description;
        return this;
    },
    SetCompleted(completed: boolean) {
        this.completed = completed;
        return this;
    },
    SetToDoItemStatus(status: ToDoItemStatus) {
        this.toDoItemStatus = status;
        return this;
    },
    Build() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            completed: this.completed,
            toDoItemStatus: this.toDoItemStatus,
            onPromote: () => {},
            onDelete: () => {},
            onCreate: () => {}
        };
    }
}

export default MockToDoItemBuilder;