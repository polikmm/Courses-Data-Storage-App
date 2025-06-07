import type Course from "../../../types/Course";
import { AuthorsList } from "./AuthorsList";
import { CreationDate } from "./CreationDate";
import { Duration } from "./Duration";
import styles from "./styles.module.css";

export function CourseDetails({ course }: Course) {
  return (
    <div className={styles.courseDetails}>
      <AuthorsList ids={course.authors} />
      <Duration duration={course.duration} />
      <CreationDate date={course.creationDate} />
    </div>
  );
}