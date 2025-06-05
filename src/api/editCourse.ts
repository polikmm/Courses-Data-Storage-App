import type { RequestBody } from "../types/RequestBody";

export async function editCourse(body: RequestBody, id: string) {
  const response = await fetch(
    `https://67efef552a80b06b889654cf.mockapi.io/react-task-2/courses/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  const data = await response.json();
  return data;
}