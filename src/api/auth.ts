import type LoginResponse from "../types/LoginResponse";

export async function auth(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30,
    }),
  });

  const data: LoginResponse = await response.json();
  return data;
}