import { CourseCard } from "../CourseCard/CourseCard";
import styles from "./style.module.css";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { CoursesControls } from "../CoursesControls/CoursesControls";

export function Courses() {
  const courses = useSelector(
    (state: RootState) => state.courses.filteredCourses,
  );
  return (
    <>
      <CoursesControls/>
        <div className={styles.coursesList} data-testid="courses-list">
          {courses?.length > 0 &&
            courses.map((courseInfo) => (
              <CourseCard course={courseInfo} key={courseInfo.id} />
            ))}
        </div>
    </>
    );
}