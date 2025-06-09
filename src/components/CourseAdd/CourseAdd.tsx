import { CourseForm } from "../CourseForm/CourseForm";
import { COURSE_ADD_TITLE } from "../../constants";
import { useEffect } from "react";
import { clearCourseAuthors } from "../../store/authorsSlice/authorsSlice";
import { useDispatch } from "react-redux";

export function CourseAdd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCourseAuthors());
  }, []);

  return (
    <CourseForm
      pageTitle={COURSE_ADD_TITLE}
      title={""}
      description={""}
      duration={0}
      courseAuthorIds={[]}
    />
  );
}