import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendAuthor = createAsyncThunk(
  "authors/addAuthor",
  async (name: string) => {
    const response = await fetch(
      "https://67efef552a80b06b889654cf.mockapi.io/react-task-2/authors",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      },
    );

    if (!response.ok) {
      throw new Error("Не удалось создать автора");
    }

    const createdAuthor = await response.json();
    return createdAuthor;
  },
);