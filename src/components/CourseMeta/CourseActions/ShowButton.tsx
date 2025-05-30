import styles from "./styles.module.css";
import { APP_ROUTES, SHOW_COURSE_BUTTON } from "../../../constants";
import { useNavigate } from "react-router-dom";

export function ShowButton({ id }: { id: string }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.courseCardShowButton} button`}
      onClick={() => navigate(APP_ROUTES.COURSE_INFO(id))}
    >
      {SHOW_COURSE_BUTTON}
    </button>
  );
}