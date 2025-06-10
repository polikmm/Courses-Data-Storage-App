import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store";
import styles from "./styles.module.css";
import icon from "../../../assets/icons/trash.svg";
import { removeCourse } from "../../../store/coursesSlice/coursesSlice";
import { deleteCourse } from "../../../api/deleteCourse";

export function DeleteButton({ id }: { id: string }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCourse = async () => {
    const response = await deleteCourse(id);
    if (response.ok) {
      dispatch(removeCourse(id));
    } else {
      console.error(response.statusText);
    }
  }

  return (
    <button
      className={`${styles.courseCardDeleteButton} button`}
      onClick={handleDeleteCourse}
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