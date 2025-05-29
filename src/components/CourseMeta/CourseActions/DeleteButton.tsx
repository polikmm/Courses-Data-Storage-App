import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store";
import styles from "./style.module.css";
import icon from "../../../assets/icons/trash.svg";
import { removeCourse } from "../../../store/coursesSlice/coursesSlice";

export function DeleteButton({ id }: { id: string }) {
  const dispatch = useDispatch<AppDispatch>();

  const deleteCourse = () => {
    dispatch(removeCourse(id));
  }

  return (
    <button
      className={`${styles.courseCardDeleteButton} button`}
      onClick={deleteCourse}
      aria-label="delete the course"
    >
      <img
        src={icon}
        alt="Delete the course"
        className={styles.courseCardIcon}
      />
    </button>
  );
}