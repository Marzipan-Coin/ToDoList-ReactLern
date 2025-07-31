import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import configReducer from './configSlice';
import todoCardReducer from './todoCardSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    config: configReducer,
    card: todoCardReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;