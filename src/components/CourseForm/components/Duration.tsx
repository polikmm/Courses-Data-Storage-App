import { DURATION_VALUE_WARNING } from "../../../constants";
import { InputField } from "../../common/InputField";
import { formatTime } from "../../common/formatTime";
import style from "./style.module.css";

export function Duration({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <>
      <InputField
        name="duration"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
        label="duration"
        placeholder="Input text"
      />
      <p className={style.duration}>
        <span className={style.durationSpan}>{formatTime(+value)}</span>hours
      </p>
      {!+value && (
        <span className={`${style.warning} fieldValidationError`}>
          {DURATION_VALUE_WARNING}
        </span>
      )}
    </>
  );
}