export const EMPTY_COURSES_TITLE = "Your List Is Empty";
export const EMPTY_COURSES_SUBTITLE =
  "Please use'Add New Course'button to add your first course";
export const ADD_NEW_COURSES_BUTTON_TEXT = "Add New Course";
export const DESCRIPTION_TITLE = "Desription: ";
export const ID_TITLE = "ID: ";
export const BACK_BUTTON = "BACK";
export const AUTHORS_TITLE = "Authors: ";
export const CREATION_DATE_TITLE = "Created: ";
export const DURATION_TITLE = "Duration: ";
export const SHOW_COURSE_BUTTON = "SHOW COURSE";
export const SEARCH_BUTTON = "SEARCH";
export const LOGOUT_BUTTON = "LOGOUT";
export const BUTTON_SUBMIT = "SUBMIT";
export const BUTTON_LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const COURSE_ADD_TITLE = "Create Course";
export const COURSE_FORM_MAININFO_TITLE = "Main Info";
export const FIELD_MIN_LENGTH_WARNING = "Should contain at least 2 characters!";
export const COURSE_EDIT_TITLE = "Course Edit";
export const COURSE_FORM_DURATION_TITLE = "Duration";
export const COURSE_FORM_AUTHORS_TITLE = "Authors";
export const COURSE_FORM_COURSE_AUTHORS_TITLE = "Course Authors";
export const CREATE_COURSE_BUTTON = "Create Course";
export const CREATE_AUTHOR_BUTTON = "Create Author";
export const DURATION_VALUE_WARNING = "Should be more 0!";
export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  COURSES: "/courses",
  COURSE_ADD: "/courses/add",
  COURSE_EDIT: (id: string) => `/courses/${id}/edit`,
  COURSE_EDIT_TEMPLATE: "/courses/:id/edit",
  COURSE_INFO: (id: string) => `/courses/${id}`,
  COURSE_INFO_TEMPLATE: "/courses/:id",
};