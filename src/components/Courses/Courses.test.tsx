import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Courses } from "./Courses";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "../Wrapper/Wrapper";
import { mockedCoursesData } from "../../../mockedData";
import { CourseEditor } from "../CourseEditor/CourseEditor";
import { CourseAdd } from "../CourseAdd/CourseAdd";
import { Course } from "../Course/Course";
import { Provider } from "react-redux";
import { getMockStore } from "../../testutils/getMockStore";

function renderCoursesPage() {
  const store = getMockStore();
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/courses"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<Course />} />
            <Route path="courses/:id/edit" element={<CourseEditor />} />
            <Route path="courses/add" element={<CourseAdd />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}

describe("Courses page behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should filter by title and description after clicking on Search button", async () => {
    renderCoursesPage();

    await screen.findByTestId("courses-list");
    expect(await screen.findByText(/JavaScript Facts and Origins/i)).toBeInTheDocument();
    expect(await screen.findByText(/Women in Tech: Pioneers of Programming/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/enter text/i);
    const searchButton = screen.getByText("SEARCH");

    await userEvent.type(input, "Women in Tech: Pioneers of Programming");
    await userEvent.click(searchButton);

    expect(screen.queryByText(/JavaScript Facts and Origins/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Women in Tech: Pioneers of Programming/i)).toBeInTheDocument();
  });

  test("Should display nothing if no course titles or descriptions match the search query", async () => {
    renderCoursesPage();

    await screen.findByTestId("courses-list");

    const input = screen.getByPlaceholderText(/enter text/i);
    const searchButton = screen.getByText("SEARCH");

    await userEvent.type(input, "test");
    await userEvent.click(searchButton);

    expect(screen.queryByTestId("course-card")).not.toBeInTheDocument();
  });

  test("Course component with current course info should replace Courses component", async () => {
    renderCoursesPage();

    await screen.findByTestId("courses-list");

    const card = screen
      .getByText((content) => content.includes("Women in Tech: Pioneers of Programming"))
      .closest('[data-testid="course-card"]') as HTMLElement;
    const btn = within(card).getByText("SHOW COURSE");

    await userEvent.click(btn);

    expect(await screen.findByText(/Women in Tech: Pioneers of Programming/i)).toBeInTheDocument();
    expect(screen.queryByText(/JavaScript Facts and Origins/i)).not.toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText(/enter text/i),
    ).not.toBeInTheDocument();
  });

  test("Should return to the Courses component with clean SearchInput component from Course", async () => {
    renderCoursesPage();

    const card = screen
      .getByText(/JavaScript Facts and Origins/i)
      .closest('[data-testid="course-card"]') as HTMLElement;
    const btn = within(card).getByText("SHOW COURSE");
    await userEvent.click(btn);

    const backBtn = screen.getByRole("button");
    await userEvent.click(backBtn);

    expect(screen.getByText(/JavaScript Facts and Origins/i)).toBeInTheDocument();
    expect(screen.getByText(/Women in Tech: Pioneers of Programming/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  test("Should delete the course", async () => {
    renderCoursesPage();

    const card = screen
      .getByText(/JavaScript Facts and Origins/i)
      .closest('[data-testid="course-card"]') as HTMLElement;
    const deleteBtn = within(card).getByRole("button", {
      name: /delete the course/i,
    });

    await userEvent.click(deleteBtn);

    expect(screen.queryByText(/JavaScript Facts and Origins/i)).not.toBeInTheDocument();
  });

  test("Should navigate to edit page with pre-filled course info", async () => {
    renderCoursesPage();

    const card = screen
      .getByText(/JavaScript Facts and Origins/i)
      .closest('[data-testid="course-card"]') as HTMLElement;
    const editBtn = within(card).getByRole("button", {
      name: /edit the course/i,
    });

    await userEvent.click(editBtn);

    expect(await screen.findByText(/Course Edit/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Title/i)).toHaveValue(
      "JavaScript Facts and Origins",
    );
    expect(screen.getByPlaceholderText(/Add description/i)).toHaveValue(
      mockedCoursesData[0].description,
    );
  });

  test("Should navigate to course add page", async () => {
    renderCoursesPage();

    const addBtn = screen.getByRole("button", { name: /Add New Course/i });
    await userEvent.click(addBtn);

    const heading = await screen.findByRole("heading", {
      name: /Create Course/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
