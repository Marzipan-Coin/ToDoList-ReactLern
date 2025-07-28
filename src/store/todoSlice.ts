import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDoItemProps from "../Components/ToDoItem/ToDoItemProps";

interface ToDoState {
  created: Array<{ToDoItem: ToDoItemProps}>
  inWork: Array<{ToDoItem: ToDoItemProps}>
  inReview: Array<{ToDoItem: ToDoItemProps}>
  testing: Array<{ToDoItem: ToDoItemProps}>
  done: Array<{ToDoItem: ToDoItemProps}>
}

const initialState: ToDoState = {
  created: [],
  inWork: [],
  inReview: [],
  testing: [],
  done: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ToDoItem: ToDoItemProps}>) => {
            switch (action.payload.ToDoItem.toDoItemStatus) {
                case 0: // Created
                    state.created.push(action.payload);
                    break;
                case 1: // In Work
                    state.inWork.push(action.payload);
                    break;
                case 2: // In Review
                    state.inReview.push(action.payload);
                    break;
                case 3: // Testing
                    state.testing.push(action.payload);
                    break;
                case 4: // Done
                    state.done.push(action.payload);
                    break;
            }},
            removeToDo: (state, action: PayloadAction<{id: string}>) => {
                state.created = state.created.filter(todo => todo.ToDoItem.id !== action.payload.id);
                state.inWork = state.inWork.filter(todo => todo.ToDoItem.id !== action.payload.id);
                state.inReview = state.inReview.filter(todo => todo.ToDoItem.id !== action.payload.id);
                state.testing = state.testing.filter(todo => todo.ToDoItem.id !== action.payload.id);
                state.done = state.done.filter(todo => todo.ToDoItem.id !== action.payload.id);
            }
        }
    });

export default todoSlice.reducer;
export const { addTodo, removeToDo } = todoSlice.actions;
