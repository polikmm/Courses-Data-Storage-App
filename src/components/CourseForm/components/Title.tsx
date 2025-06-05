import { InputField } from "../../common/InputField";
import { FIELD_MIN_LENGTH_WARNING } from "../../../constants";
import style from "./style.module.css";

export function Title({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className={style.courseFormTitle}>
      <InputField
        name="title"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="Title"
        placeholder="Enter Title"
      />
      {value.length < 2 && (
        <span className="fieldValidationError">{FIELD_MIN_LENGTH_WARNING}</span>
      )}
    </div>
  );
}