import { COURSE_FORM_COURSE_AUTHORS_TITLE } from "../../../../../constants";
import { removeAuthorFromCourse } from "../../../../../store/authorsSlice/authorsSlice";
import trash from "../../../../../assets/icons/trash__black.svg";
import style from "./style.module.css";
import type { RootState } from "../../../../../store";
import { useSelector, useDispatch } from "react-redux";

export function CourseAuthors() {
  const courseAuthors = useSelector(
    (state: RootState) => state.authors.courseAuthors,
  );
  const dispatch = useDispatch();

  return (
    <div className={style.courseAuthors} data-testid="course-authors">
      <h2>{COURSE_FORM_COURSE_AUTHORS_TITLE}</h2>
      {courseAuthors.length > 0 ? (
        courseAuthors.map((a, idx) => {
          return (
            <div key={`courses-author-${a.id}-${idx}`}>
              <span id={a.id}>{a.name}</span>
              <button
                type="button"
                className={style.buttonIcon}
                onClick={() => dispatch(removeAuthorFromCourse(a.id))}
              >
                <img src={trash} alt="delete the author from authors list" />
              </button>
            </div>
          );
        })
      ) : (
        <h4>Authors List Is Empty</h4>
      )}
    </div>
  );
}