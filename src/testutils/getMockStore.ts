import {
  mockedCoursesData,
  mockedAuthorsList,
} from "../../mockedData";
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../store/coursesSlice/coursesSlice";
import authorsReducer from "../store/authorsSlice/authorsSlice";

export const getMockStore = () =>
  configureStore({
    reducer: {
      authors: authorsReducer,
      courses: coursesReducer,
    },
    preloadedState: {
      authors: {
        authors: mockedAuthorsList,
        courseAuthors: [],
        isLoading: false,
        error: null,
      },
      courses: {
        courses: mockedCoursesData,
        filteredCourses: mockedCoursesData,
        currentCourse: null,
        isLoading: false,
        error: null,
      },
    },
  });