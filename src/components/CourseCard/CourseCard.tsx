import type CardData from "../../types/CardData";
import { CourseActions } from "../CourseMeta/CourseActions/CourseActions";
import { CourseDetails } from "../CourseMeta/CourseDetails/CourseDetails";
import styles from "./styles.module.css";

export function CourseCard({ course }: { course: CardData }) {
  return (
    <div
      className={styles.coursesCard}
      id={course.id}
      data-testid="course-card"
    >
      <h3 className={styles.courseTitle}>{course.title}</h3>
      <p className={styles.courseDescription}>{course.description}</p>
      <CourseDetails course={course} />
      <CourseActions course={course} />
    </div>
  );
}