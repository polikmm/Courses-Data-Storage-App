import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CoursesContainer } from "../CoursesContainer/CoursesContainer";
import { Courses } from "../Courses/Courses";
import { Provider } from "react-redux";
import { store } from "../../store";

test("should show empty page in case of empty list", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/courses"]}>
        <Routes>
          <Route path="/courses" element={<CoursesContainer />}>
            <Route index element={<Courses />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  await screen.findByTestId("empty-page");

  expect(
    await screen.findByText(
      "Please use'Add New Course'button to add your first course",
    ),
  ).toBeInTheDocument();
  expect(screen.queryByPlaceholderText("Input text")).not.toBeInTheDocument();
});
