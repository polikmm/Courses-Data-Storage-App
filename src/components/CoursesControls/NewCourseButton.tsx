import styles from "./style.module.css";
import { ADD_NEW_COURSES_BUTTON_TEXT, APP_ROUTES } from "../../constants";
import { useNavigate } from "react-router-dom";

export function NewCourseButton() {
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.coursesAddButton} button`}
      onClick={() => navigate(`${APP_ROUTES.COURSE_ADD}`)}
    >
      {ADD_NEW_COURSES_BUTTON_TEXT}
    </button>
  );
}