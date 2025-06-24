import { render, screen, /* waitFor */ } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";
//import { APP_ROUTES } from "../../../constants";

const mockSetUser = jest.fn();
jest.mock("../../../context/UserContext", () => ({
  useUser: () => ({
    setUser: mockSetUser,
  }),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockAuthorisation = jest.fn();
jest.mock("../../../api/signIn", () => ({
  signIn: (...args: []) => mockAuthorisation(...args),
}));

describe("LoginForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show validation errors if fields are empty", async () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitButton);

    expect(await screen.findByText(/Email is reguired/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is reguired/i),
    ).toBeInTheDocument();
  });
/*
  test("should call authorisation and set user on valid input", async () => {
    mockAuthorisation.mockResolvedValue({
      username: "test_user",
      accessToken: "mock-token",
    });

    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText(/write your name/i);
    const passwordInput = screen.getByPlaceholderText(/write your password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(usernameInput, "test_user");
    await userEvent.type(passwordInput, "secret123");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockAuthorisation).toHaveBeenCalledWith("test_user", "secret123");
      expect(mockSetUser).toHaveBeenCalledWith({
        username: "test_user",
        token: "mock-token",
      });
      expect(mockNavigate).toHaveBeenCalledWith(APP_ROUTES.COURSES);
    });
  });
*/
  test("should show error message from server", async () => {
    mockAuthorisation.mockResolvedValue({
      message: "Invalid credentials",
    });

    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText(/write your name/i);
    const passwordInput = screen.getByPlaceholderText(/write your password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(usernameInput, "test_user");
    await userEvent.type(passwordInput, "wrongpass");
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/❌Invalid credentials!/),
    ).toBeInTheDocument();
  });
});
