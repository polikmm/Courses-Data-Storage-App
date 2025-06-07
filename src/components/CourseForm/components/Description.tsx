import { FIELD_MIN_LENGTH_WARNING } from "../../../constants";
import style from "./style.module.css";

export function Description({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className={style.courseFormDescription}>
      <label className="label" htmlFor="description">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        value={value}
        placeholder="Add description"
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
      {value.length < 2 && (
        <span className="fieldValidationError">{FIELD_MIN_LENGTH_WARNING}</span>
      )}
    </div>
  );
}