export async function deleteCourse(
  id: string
) {
  const response = await fetch(
    `https://67efef552a80b06b889654cf.mockapi.io/react-task-2/courses/${id}`,
    {
      method: "DELETE",
    },
  );
  return response;
}