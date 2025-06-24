import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";
import type { FC } from "react";

jest.mock("./LoginForm/LoginForm", () => ({
  LoginForm: (() => <div data-testid="login-form">Mock Login Form</div>) as FC,
}));

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders login form if no token in localStorage", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  test("redirects to /courses if token exists", () => {
    localStorage.setItem("token", "mock-token");

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginPage />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("login-form")).not.toBeInTheDocument();
  });
});