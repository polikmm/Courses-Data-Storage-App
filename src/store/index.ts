import { configureStore } from "@reduxjs/toolkit";
import authorsReducer from "./authorsSlice/authorsSlice";
import coursesReducer from "./coursesSlice/coursesSlice";

export const store = configureStore({
  reducer: {
    authors: authorsReducer,
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;