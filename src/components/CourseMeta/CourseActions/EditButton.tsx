import styles from "./style.module.css";
import icon from "../../../assets/images/Icon-Edit.svg";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants";

export function EditButton({ id }: { id: string }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.courseCardEditButton} button`}
      onClick={() => navigate(APP_ROUTES.COURSE_EDIT(id))}
    >
      <img src={icon} alt="Edit the course" />
    </button>
  );
}