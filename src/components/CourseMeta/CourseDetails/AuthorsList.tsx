import styles from "./styles.module.css";
import { AUTHORS_TITLE } from "../../../constants";
import { getCurrentAuthors } from "../../common/getCurrentAuthors";
import type AuthorIds from "../../../types/AuthorIds";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/index";

export function AuthorsList({ ids }: AuthorIds) {
  const authors = useSelector((state: RootState) => state.authors.authors);
  const currentAuthors = getCurrentAuthors(authors, { ids });

  return (
    <h3 className={`${styles.cardAuthorsList} ${styles.courseDetail}`}>
      <span>{AUTHORS_TITLE}</span>
      {currentAuthors.join(", ")}
    </h3>
  );
}