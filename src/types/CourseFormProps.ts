import CardData from "./CardData";
import { RequestBody } from "./RequestBody";

export type CourseFormProps = {
  pageTitle: string;
  title: string;
  description: string;
  duration: number;
  courseAuthorIds: string[];
  onSubmit: (body: RequestBody) => Promise<CardData>;
};