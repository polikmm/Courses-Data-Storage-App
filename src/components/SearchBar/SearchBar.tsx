import { useState } from "react";
import styles from "./style.module.css";
import { SEARCH_BUTTON } from "../../constants";
import { InputField } from "../common/InputField";
import { filterCourses } from "../../store/coursesSlice/coursesSlice";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <InputField
        name={"search"}
        type="text"
        value={value}
        label={"search"}
        onChange={handleChange}
        placeholder={"enter text"}
      />
      <button
        className={`${styles.searchBarButton} button`}
        onClick={() => dispatch(filterCourses(value))}
      >
        {SEARCH_BUTTON}
      </button>
    </div>
  );
}