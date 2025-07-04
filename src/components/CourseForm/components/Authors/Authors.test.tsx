import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Authors } from "./Authors";
import { store } from "../../../../store";

describe("Authors form section", () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: "123", name: "Test Author" }),
      }),
    ) as jest.Mock;
  });

  it("should dispatch sendAuthor and add author to Authors List", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Authors />
        </MemoryRouter>
      </Provider>,
    );

    const input = screen.getByPlaceholderText(/Enter Author name/i);
    const button = screen.getByRole("button", { name: /create author/i });

    await userEvent.type(input, "Test Author");
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Test Author")).toBeInTheDocument();
    });

    expect(await screen.findByText("Test Author")).toBeInTheDocument();
  });

  it("should add author to Courses Authors", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Authors />
        </MemoryRouter>
      </Provider>,
    );

    const authorAdd = screen.getAllByAltText(
      /add the author to the course authors list/i,
    )[0];

    const authorItem = authorAdd.closest(".authorsListItem");
    const authorNameElement = authorItem?.querySelector("h5");

    expect(authorNameElement).not.toBeNull();
    const name = authorNameElement?.textContent as string;

    await userEvent.click(authorAdd);

    const courseAuthors = await screen.findByTestId("course-authors");

    await waitFor(() => {
      expect(courseAuthors).toHaveTextContent(name);
    });
  });
});