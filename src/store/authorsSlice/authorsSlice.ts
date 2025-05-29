import { sendAuthor } from "../../api/sendAuthor";
import type { AuthorType } from "../../types/AuthorType";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthorsState {
  authors: AuthorType[];
  courseAuthors: AuthorType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthorsState = {
  authors: [],
  courseAuthors: [],
  isLoading: false,
  error: null
}

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async () => {
    const response = await fetch(
      "https://67efef552a80b06b889654cf.mockapi.io/react-task-2/authors",
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

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addAuthor(state, action: PayloadAction<AuthorType>) {
      state.authors.push(action.payload);
    },
    addAuthorToCourse(state, action: PayloadAction<AuthorType>) {
      const isExists = state.courseAuthors.find(
        (a) => a.id === action.payload.id,
      );
      if (!isExists) {
        state.courseAuthors.push(action.payload);
      }
    },
    removeAuthorFromCourse(state, action: PayloadAction<string>) {
      state.courseAuthors = state.courseAuthors.filter(
        (a) => a.id !== action.payload,
      );
    },
    deleteAuthor(state, action: PayloadAction<string>) {
      state.authors = state.authors.filter((a) => a.id !== action.payload);
    },
    clearCourseAuthors(state) {
      state.courseAuthors = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.authors = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(
        sendAuthor.fulfilled,
        (state, action: PayloadAction<AuthorType>) => {
          state.authors.push(action.payload);
        },
      )
      .addCase(sendAuthor.rejected, (state, action) => {
        state.error = action.error.message || "Ошибка при создании автора";
      });
  },
})

export const {
  addAuthor,
  addAuthorToCourse,
  removeAuthorFromCourse,
  deleteAuthor,
  clearCourseAuthors,
} = authorsSlice.actions;
export default authorsSlice.reducer;