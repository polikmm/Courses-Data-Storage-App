import type { User } from "./User";

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};