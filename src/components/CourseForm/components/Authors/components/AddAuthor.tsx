import { InputField } from "../../../../common/InputField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CREATE_AUTHOR_BUTTON,
  FIELD_MIN_LENGTH_WARNING,
} from "../../../../../constants";
import { sendAuthor } from "../../../../../api/sendAuthor";
import style from "./style.module.css";
import type { AppDispatch } from "../../../../../store";

export function AddAuthor() {
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const addToList = async () => {
    if (author.length < 2) return;

    const resultAction = await dispatch(sendAuthor(author));

    if (sendAuthor.fulfilled.match(resultAction)) {
      setAuthor("");
    }
  };
  return (
    <div className={style.addAuthor}>
      <InputField
        name="addAuthor"
        type="text"
        value={author}
        label="Author Name"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author name"
      />
      <button type="button" className="button" onClick={addToList}>
        {CREATE_AUTHOR_BUTTON}
      </button>
      {author.length < 2 && (
        <span className={`${style.warning} fieldValidationError`}>
          {FIELD_MIN_LENGTH_WARNING}
        </span>
      )}
    </div>
  );
}