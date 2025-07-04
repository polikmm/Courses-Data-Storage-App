import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("../../context/UserContext", () => ({
  useUser: jest.fn(),
}));

import { useUser } from "../../context/UserContext";

describe("Header", () => {
  it("should render Navbar if user is authenticated", async () => {
    (useUser as jest.Mock).mockReturnValue({ user: { username: "test_user" } });

    render(<Header />);

    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  it("should NOT render Navbar if user is not authenticated", async () => {
    (useUser as jest.Mock).mockReturnValue({ user: null });

    render(<Header />);

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});