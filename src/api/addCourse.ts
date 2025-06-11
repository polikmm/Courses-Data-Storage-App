import type { RequestBody } from "../types/RequestBody";

export async function addCourse(body: RequestBody) {
  const response = await fetch(
    "https://67efef552a80b06b889654cf.mockapi.io/react-task-2/courses",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error("Ошибка при создании курса");
  }

  return await response.json();
}