import { EmptyPage } from "../EmptyPage/EmptyPage";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Courses } from "../Courses/Courses";

export function CoursesContainer() {
  const courses = useSelector((state: RootState) => state.courses.courses);

  return <>{courses.length > 0 ? <Courses /> : <EmptyPage />}</>;
}