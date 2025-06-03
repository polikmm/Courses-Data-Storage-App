import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type CardData from "../../types/CardData";

export interface CoursesState {
  courses: CardData[];
  filteredCourses: CardData[];
  currentCourse: CardData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  filteredCourses: [],
  currentCourse: null,
  isLoading: false,
  error: null,
}

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch(
      "https://67efef552a80b06b889654cf.mockapi.io/react-task-2/courses",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch authors");
    }
    const data = await response.json();
    return data;
  },
)

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<CardData[]>) {
      state.courses = action.payload;
      state.filteredCourses = action.payload;
    },
    filterCourses(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredCourses = state.courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm),
      );
    },
    resetFilteredCourses(state) {
      state.filteredCourses = state.courses;
    },
    clearFilteredCourses(state) {
      state.filteredCourses = [];
    },
    setCurrentCourse(state, action: PayloadAction<string>) {
      state.currentCourse =
        state.courses.find((c) => c.id === action.payload) || null;
    },
    clearCurrentCourse(state) {
      state.currentCourse = null;
    },
    removeCourse(state, action: PayloadAction<string>) {
      state.courses = state.courses.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
        state.filteredCourses = [...action.payload];
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось загрузить курсы";
      });
  },
})

export const {
  setCourses,
  filterCourses,
  resetFilteredCourses,
  clearFilteredCourses,
  setCurrentCourse,
  clearCurrentCourse,
  removeCourse
} = coursesSlice.actions;
export default coursesSlice.reducer;
