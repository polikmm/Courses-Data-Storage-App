import { auth } from "./auth";

export const signIn = async (userName: string, password: string) => {
  const data = await auth(userName, password)
  
  if (data.accessToken) {
    localStorage.setItem("token", JSON.stringify(data.accessToken));
  } else {
    localStorage.setItem("token", JSON.stringify(data.refreshToken));
  }

  return data;
}