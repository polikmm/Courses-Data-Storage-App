import { createContext, useContext } from "react";
import type { UserContextType } from "../types/UserContextType";

const defaultValue: UserContextType = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);
export const useUser = () => useContext(UserContext);