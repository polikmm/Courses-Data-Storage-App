export async function getAuthUser(token: string) {
  const response = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return {
    username: data.username,
    token: token,
  };
}