import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  isTaskCreating: boolean;
  isProfileOpened: boolean;
  isInfoOpened: boolean;
  isCardOpened: boolean; // New state to track if a card is opened
}

const initialState: ConfigState = {
    isTaskCreating: false,
    isProfileOpened: false,
    isInfoOpened: false,
    isCardOpened: false
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
        },
        toggleCardOpened: (state) => {
            state.isCardOpened = !state.isCardOpened;
        }
    }
});

export default configSlice.reducer;
export const { toggleTaskCreating, toggleProfileOpened, toggleInfoOpened, toggleCardOpened } = configSlice.actions;
