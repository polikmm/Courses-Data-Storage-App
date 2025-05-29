import { ShowButton } from "./ShowButton";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import styles from "./style.module.css";
import type CardData from "../../../types/CardData";

export function CourseActions({ course }: { course: CardData }) {
  return (
    <div className={styles.courseCardActions}>
      <ShowButton id={course.id} />
      <DeleteButton id={course.id} />
      <EditButton id={course.id} />
    </div>
  );
}