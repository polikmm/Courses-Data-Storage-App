import { SearchBar } from "../SearchBar/SearchBar";
import { NewCourseButton } from "./NewCourseButton";
import style from "./style.module.css";

export function CoursesControls() {
  return (
    <div className={style.coursesControls}>
      <SearchBar />
      <NewCourseButton />
    </div>
  )
}