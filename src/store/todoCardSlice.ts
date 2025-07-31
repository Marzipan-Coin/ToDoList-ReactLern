import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDoItemStatus from "../Components/ToDoItem/ToDoItemStatus";

interface TodoCard {
    id: string;
    name: string;
    description: string;
    status: ToDoItemStatus;
    completed: boolean; // Optional field to indicate if the task is completed
}

const initialState: TodoCard = {
    id: '',
    name: '',
    description: '',
    status: 0, // Default status set to Created
    completed: false // Default completed status set to false
};

export const todoCardSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action: PayloadAction<TodoCard>) => {
            return { ...state, ...action.payload };
        }
    }
});

export default todoCardSlice.reducer;
export const { setTodo } = todoCardSlice.actions;