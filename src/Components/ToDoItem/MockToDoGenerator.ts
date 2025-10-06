import MockToDoItemBuilder from "./MockToDoItemBuilder";
import MockToDoListBuilder from "./MockToDoListBuilder";
import ToDoItemLists from "./ToDoItemList";
import ToDoItemStatus from "./ToDoItemStatus";

const MockToDoGenerate = ({createdCount, inWorkCount, inReviewCount, testingCount, doneCount} 
    : {createdCount: number, inWorkCount: number, inReviewCount: number, testingCount: number, doneCount: number}) : ToDoItemLists => {
  const list = MockToDoListBuilder;
    for (let i = 1; i <= createdCount; i++) {
        list.SetToCreated(CreateItem({id: i + 'Created', name: `Created Task ${i}`, description: `This is created task number ${i}`, status: ToDoItemStatus.Created}));
    }

    for (let i = 1; i <= inWorkCount; i++) {
        list.SetToInWork(CreateItem({id: i + 'InWork', name: `In Work Task ${i}`, description: `This is in work task number ${i}`, status: ToDoItemStatus.InWork}));
    }

    for (let i = 1; i <= inReviewCount; i++) {
        list.SetToInReview(CreateItem({id: i + 'InReview', name: `In Review Task ${i}`, description: `This is in review task number ${i}`, status: ToDoItemStatus.InReview}));
    }

    for (let i = 1; i <= testingCount; i++) {
        list.SetToTesting(CreateItem({id: i + 'Testing', name: `Testing Task ${i}`, description: `This is testing task number ${i}`, status: ToDoItemStatus.Testing}));
    }

    for (let i = 1; i <= doneCount; i++) {
        list.SetToDone(CreateItem({id: i + 'Done', name: `Done Task ${i}`, description: `This is done task number ${i}`, status: ToDoItemStatus.Done}));
    }

  return list.Build();
}

const CreateItem = ({id, name, description, status} : {id: string, name: string, description: string, status: ToDoItemStatus}) => {
  return MockToDoItemBuilder
    .SetId(id)
    .SetName(name)
    .SetDescription(description)
    .SetToDoItemStatus(status)
    .SetCompleted(false)
    .Build();
}

export default MockToDoGenerate;