import {
  APP_ROUTES,
  COURSE_FORM_DURATION_TITLE,
  COURSE_FORM_MAININFO_TITLE,
} from "../../constants";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { Duration } from "./components/Duration";
import { Authors } from "./components/Authors/Authors";
import { useNavigate } from "react-router-dom";
import { setCourses } from "../../store/coursesSlice/coursesSlice";
import type { AuthorType } from "../../types/AuthorType";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import type { CourseFormProps } from "../../types/CourseFormProps";
import {
  addAuthorToCourse,
  clearCourseAuthors,
} from "../../store/authorsSlice/authorsSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";

export function CourseForm({
  pageTitle,
  title,
  description,
  duration,
  courseAuthorIds,
  onSubmit,
}: CourseFormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.authors.authors);
  const courseAuthors = useSelector(
    (state: RootState) => state.authors.courseAuthors,
  );
  const courses = useSelector((state: RootState) => state.courses.courses);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDuration, setFormDuration] = useState("");

  useEffect(() => {
    if (title) setFormTitle(title);
    if (description) setFormDescription(description);
    if (duration) setFormDuration(duration.toString());

    if (courseAuthorIds.length > 0 && authors.length > 0) {
      dispatch(clearCourseAuthors());
      const restored = courseAuthorIds
        .map((id) => authors.find((a) => a.id === id))
        .filter((a): a is AuthorType => Boolean(a));

      restored.forEach((a) => dispatch(addAuthorToCourse(a)));
    }
  }, [title, description, duration, courseAuthorIds]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formTitle.length < 2 || formDescription.length < 2 || !+formDuration) {
      return;
    }
    const creationDate = () => {
      const today = new Date();

      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();

      return `${day}/${month}/${year}`;
    };
    const body = {
      title: formTitle,
      description: formDescription,
      creationDate: creationDate(),
      duration: formDuration,
      authors: courseAuthors.map((a) => a.id),
    };

    const newCourse = await onSubmit(body);
    const newData = courses.filter((c) => c.id !== newCourse.id);
    dispatch(setCourses([newCourse, ...newData]));
    resetData();
  };

  const resetData = () => {
    clearCourseAuthors();
    setFormTitle("");
    setFormDescription("");
    setFormDuration("");
    navigate(`${APP_ROUTES.COURSES}`);
  };

  return (
    <div className={style.courseEditor}>
      <h1 className={style.courseEditorHeading}>{pageTitle}</h1>
      <form
        className={style.courseForm}
        onSubmit={submit}
        data-testid="course-form"
      >
        <div className={style.courseFormBlock}>
          <h2>{COURSE_FORM_MAININFO_TITLE}</h2>
          <Title value={formTitle} onChange={setFormTitle} />
          <Description value={formDescription} onChange={setFormDescription} />
        </div>
        <div className={style.courseFormDuration}>
          <h2>{COURSE_FORM_DURATION_TITLE}</h2>
          <Duration value={formDuration} onChange={setFormDuration} />
        </div>
        <Authors />
        <div className={style.courseFormActions}>
          <button className="button" type="button" onClick={resetData}>
            CANCEL
          </button>
          <button className="button" type="submit">
            CREATE COURSE
          </button>
        </div>
      </form>
    </div>
  );
}