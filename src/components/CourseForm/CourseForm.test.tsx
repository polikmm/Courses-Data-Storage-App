import { render, screen } from "@testing-library/react";
import { CourseForm } from "./CourseForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Course Form", () => {
  it("should prevent submition if fields are empty", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CourseForm
            pageTitle={""}
            title={""}
            description={""}
            duration={0}
            courseAuthorIds={[]}
            onSubmit={jest.fn()}
          />
        </MemoryRouter>
      </Provider>,
    );

    const createCourseBtn = screen.getByRole("button", {
      name: /Create Course/i,
    });
    await userEvent.click(createCourseBtn);

    expect(screen.getByTestId("course-form")).toBeInTheDocument();
  });

  it("should prevent submition if title/description contain less than 2 characters", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CourseForm
            pageTitle={""}
            title={"a"}
            description={"b"}
            duration={0}
            courseAuthorIds={[]}
            onSubmit={jest.fn()}
          />
        </MemoryRouter>
      </Provider>,
    );

    const createCourseBtn = screen.getByRole("button", {
      name: /Create Course/i,
    });
    await userEvent.click(createCourseBtn);

    expect(screen.getByTestId("course-form")).toBeInTheDocument();
  });

  it("should navigate to courses page if user click on cancel button", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/courses/add"]}>
          <Routes>
            <Route
              path="/courses/add"
              element={
                <CourseForm
                  pageTitle={""}
                  title={""}
                  description={""}
                  duration={0}
                  courseAuthorIds={[]}
                  onSubmit={jest.fn()}
                />
              }
            />
            <Route path="/courses" element={<div>Courses Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const cancelBtn = screen.getByRole("button", { name: /cancel/i });
    await userEvent.click(cancelBtn);

    expect(await screen.findByText("Courses Page")).toBeInTheDocument();
  });
});