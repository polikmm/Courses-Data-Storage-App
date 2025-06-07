import { AddAuthor } from "./components/AddAuthor";
import { AuthorsList } from "./components/AuthorsList";
import { CourseAuthors } from "./components/CourseAuthors";
import { COURSE_FORM_AUTHORS_TITLE } from "../../../../constants";
import style from "./style.module.css";

export function Authors() {
  return (
    <>
      <div className={style.courseFormAuthors}>
        <h2>{COURSE_FORM_AUTHORS_TITLE}</h2>
        <AddAuthor />
        <AuthorsList />
      </div>
      <CourseAuthors />
    </>
  );
}