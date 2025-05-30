import { APP_ROUTES, EMPTY_COURSES_TITLE } from "../../constants";
import { EMPTY_COURSES_SUBTITLE } from "../../constants";
import { ADD_NEW_COURSES_BUTTON_TEXT } from "../../constants";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function EmptyPage() {
  const courses = useSelector((state: RootState) => state.courses.courses);
  const navigate = useNavigate();

  return (
    <>
      {courses.length === 0 && (
        <div className={styles.emptyList} data-testid="empty-page">
          <h1 className={styles.emptyListTitle}>{EMPTY_COURSES_TITLE}</h1>
          <h4 className={styles.emptyListSubtitle}>{EMPTY_COURSES_SUBTITLE}</h4>
          <button
            className={`button ${styles.emptyListButton}`}
            onClick={() => navigate(`${APP_ROUTES.COURSE_ADD}`)}
          >
            {ADD_NEW_COURSES_BUTTON_TEXT}
          </button>
        </div>
      )}
    </>
  );
}