import { LoginForm } from "./LoginForm/LoginForm";
import { Navigate } from "react-router-dom";
import { APP_ROUTES, LOGIN } from "../../constants";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={APP_ROUTES.COURSES} replace />;
  }

  return (
    <main className="main">
      <div className={styles.loginContainer}>
        <h1 className={styles.loginHeading}>{LOGIN}</h1>
        <LoginForm />
      </div>
    </main>
  );
}