import styles from "./styles.module.css";
import { DURATION_TITLE } from "../../../constants";
import { formatTime } from "../../common/formatTime";

export function Duration({ duration }: { duration: number }) {
  return (
    <h3 className={styles.courseDetail}>
      <span>{DURATION_TITLE}</span>
      {formatTime(duration)}
    </h3>
  );
}