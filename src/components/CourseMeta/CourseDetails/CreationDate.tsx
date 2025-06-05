import styles from "./styles.module.css";
import type { CreationDateType } from "../../../types/CreationDateType";
import { CREATION_DATE_TITLE } from "../../../constants";

export function CreationDate({ date }: CreationDateType) {
  return (
    <h3 className={styles.courseDetail}>
      <span>{CREATION_DATE_TITLE}</span>
      {date.replace(/\//g, ".")}
    </h3>
  );
}