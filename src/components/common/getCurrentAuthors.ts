import type { AuthorType, } from "../../types/AuthorType";
import type AuthorIds from "../../types/AuthorIds";

export function getCurrentAuthors(authors: AuthorType[], { ids }: AuthorIds) {
  const currentAuthors = ids.map(
    (id: string) => authors.find((author) => author.id === id)?.name,
  );
  return currentAuthors;
}