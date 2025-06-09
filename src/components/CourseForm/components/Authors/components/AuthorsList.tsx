import { Author } from "./Author";
import { addAuthorToCourse, deleteAuthor, removeAuthorFromCourse } from "../../../../../store/authorsSlice/authorsSlice";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../../store/index";
import { setCourses } from "../../../../../store/coursesSlice/coursesSlice";


export function AuthorsList() {
  const courses = useSelector((state: RootState) => state.courses.courses);
  const authors = useSelector((state: RootState) => state.authors.authors);
  const courseAuthors = useSelector(
    (state: RootState) => state.authors.courseAuthors,
  );
  const dispatch = useDispatch<AppDispatch>();


  const filtered = authors.filter(
    (a) => !courseAuthors.some((curA) => curA.id === a.id),
  );

  const addAuthor = (id: string, name: string) => {
    dispatch(addAuthorToCourse({ id, name }));
  };

  const handleDeleteAuthor = (id: string) => {
    const matches = courses.map((course) => course.authors.find((el) => el === id)).filter((el) => Boolean(el));

    if (!matches.length) {
      dispatch(deleteAuthor(id));
    } else {
      const confirmDeletion = prompt("This author is linked to other courses. Remove from all?", "yes/no");

      if (confirmDeletion?.toLowerCase() === 'no') return;
      if (confirmDeletion?.toLowerCase() === 'yes') {
        console.log(authors)
        const newData = courses.map((course) => ({
          ...course,
          authors: course.authors.filter((a) => a !== id),
        }));
        dispatch(setCourses(newData));
        dispatch(deleteAuthor(id))
        dispatch(removeAuthorFromCourse(id));
      }
    }
  }
  return (
    <div className={style.authorsList}>
      <h3>Authors List</h3>
      {filtered.map((a, idx) => (
        <Author
          key={`course-author-${a.id}-${idx}`}
          id={a.id}
          name={a.name}
          onAdd={() => addAuthor(a.id, a.name)}
          onDelete={() => handleDeleteAuthor(a.id)}
        />
      ))}
    </div>
  );
}