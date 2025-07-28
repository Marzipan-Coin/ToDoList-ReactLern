import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  isTaskCreating: boolean;
  isProfileOpened: boolean;
  isInfoOpened: boolean;
}

const initialState: ConfigState = {
    isTaskCreating: false,
    isProfileOpened: false,
    isInfoOpened: false
};

export const configSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleTaskCreating: (state) => {
            state.isTaskCreating = !state.isTaskCreating;
        },
        toggleProfileOpened: (state) => {
            state.isProfileOpened = !state.isProfileOpened;
        },
        toggleInfoOpened: (state) => {
            state.isInfoOpened = !state.isInfoOpened;
        }
    }
});

export default configSlice.reducer;
export const { toggleTaskCreating, toggleProfileOpened, toggleInfoOpened } = configSlice.actions;
