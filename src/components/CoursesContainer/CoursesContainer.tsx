import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Courses } from "../Courses/Courses";
import { EmptyPage } from "../EmptyPage/EmptyPage";

export function CoursesContainer() {
  const courses = useSelector((state: RootState) => state.courses.courses);
  return (
    <main className="main">
      <div className="container">
        {courses.length > 0 ? <Courses /> : <EmptyPage />}
      </div>
    </main>
  );
}