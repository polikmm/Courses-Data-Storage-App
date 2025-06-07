import type { InputFieldProps } from "../../types/InputFieldProps";

export function InputField({
  name,
  type,
  value,
  label,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <>
      <label className="label">{label}</label>
      <input
        name={name}
        type={type}
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
}