import { CourseForm } from "../CourseForm/CourseForm";
import { COURSE_EDIT_TITLE } from "../../constants";
import { useParams } from "react-router-dom";
import { setCurrentCourse } from "../../store/coursesSlice/coursesSlice";
import { editCourse } from "../../api/editCourse";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useEffect } from "react";

export function CourseEditor() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const courseData = useSelector(
    (state: RootState) => state.courses.currentCourse,
  );

  useEffect(() => {
    if (id) {
      dispatch(setCurrentCourse(id));
    }
  }, [id, dispatch]);

  if (!courseData || !id) return null;

  return (
    <CourseForm
      pageTitle={COURSE_EDIT_TITLE}
      title={courseData.title}
      description={courseData.description}
      duration={courseData.duration}
      courseAuthorIds={courseData.authors}
      onSubmit={(body) => editCourse(body, id)}
    />
  );
}