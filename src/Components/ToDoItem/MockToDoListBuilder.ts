import ToDoItemProps from "./ToDoItemProps";

const MockToDoListBuilder = {
    created : [] as ToDoItemProps[],
    inWork : [] as ToDoItemProps[],
    inReview : [] as ToDoItemProps[],
    testing : [] as ToDoItemProps[],
    done : [] as ToDoItemProps[],

    SetToCreated(item: ToDoItemProps) {
        this.created.push(item);

        return this;
    },
    SetToInWork(item: ToDoItemProps) {
        this.inWork.push(item);

        return this;
    },
    SetToInReview(item: ToDoItemProps) {
        this.inReview.push(item);

        return this;
    },
    SetToTesting(item: ToDoItemProps) {
        this.testing.push(item);

        return this;
    },
    SetToDone(item: ToDoItemProps) {
        this.done.push(item);

        return this;
    },
    Build () {
        return {
            created: MockToDoListBuilder.created,
            inWork: MockToDoListBuilder.inWork,
            inReview: MockToDoListBuilder.inReview,
            testing: MockToDoListBuilder.testing,
            done: MockToDoListBuilder.done
        }
    }
};

export default MockToDoListBuilder;
