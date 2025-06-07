import { useState, type ReactNode } from "react";
import { UserContext } from "../context/UserContext";
import type { User } from "../types/User";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}