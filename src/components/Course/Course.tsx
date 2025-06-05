import { CourseDetails } from "../CourseMeta/CourseDetails/CourseDetails";
import styles from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { APP_ROUTES, DESCRIPTION_TITLE } from "../../constants";
import { ID_TITLE } from "../../constants";
import { BACK_BUTTON } from "../../constants";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function Course() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const data = courses.find((el) => el.id === id);

  if (!courses) return;
  if (!data) return;

  return (
    <div className={styles.courseInfo}>
      <h2 className={styles.courseInfoCardTitle}>{data.title}</h2>
      <div className={`${styles.coursesCard} ${styles.courseInfoCard}`}>
        <h3 className={styles.courseCardTitle}>{DESCRIPTION_TITLE}</h3>
        <p className={styles.courseCardDescription}>{data.description}</p>
        <div className={styles.courseCardInfo}>
          <h4 className={styles.courseDetail}>
            <span>{ID_TITLE}</span>
            {data.id}
          </h4>
          <CourseDetails course={data} />
        </div>
      </div>
      <button
        className={`button ${styles.courseInfoCardBackButton}`}
        onClick={() => navigate(`${APP_ROUTES.COURSES}`)}
      >
        {BACK_BUTTON}
      </button>
    </div>
  );
}