import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES, BUTTON_SUBMIT } from "../../../constants";
import styles from "./LoginForm.module.css";
import type { ValidationErrors } from "../../../types/ValidationError";
import { InputField } from "../../common/InputField";
import { signIn } from "../../../api/signIn";

export function LoginForm() {
  const { setUser } = useUser();
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [validationError, setValidationError] = useState<ValidationErrors>({
    email: null,
    password: null,
  });
  const navigate = useNavigate();

  const validate = () => {
    const errors: ValidationErrors = {
      email: null,
      password: null,
    };

    if (!userNameValue.trim()) {
      errors.email = "Email is reguired!";
    }

    if (!passwordValue.trim()) {
      errors.password = "Password is reguired!";
    }

    setValidationError(errors);
    if (!errors.email && !errors.password) return false;
    return true;
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!validate()) {
      try {
        const response = await signIn(userNameValue, passwordValue);
        
        if (response.message) {
          setRequestStatus(`❌${response.message}!`);
        } else {
          setRequestStatus("");
          navigate(`${APP_ROUTES.COURSES}`);
          setUser({
            username: response.username,
            token: response.accessToken || response.refreshToken,
          });
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={submit} className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <div>
          <InputField
            name={"username"}
            type="text"
            value={userNameValue}
            label={"username"}
            onChange={(e) => setUserNameValue(e.target.value)}
            placeholder={"write your name"}
          />
          {validationError.email && (
            <span className="fieldValidationError">
              {validationError.email}
            </span>
          )}
        </div>
        <div>
          <InputField
            name={"password"}
            type="password"
            value={passwordValue}
            label={"password"}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder={"write your password"}
          />
          {validationError.password && (
            <span className="fieldValidationError">
              {validationError.password}
            </span>
          )}
        </div>
      </div>
      {requestStatus && (
        <span className={styles.requestError}>{requestStatus}</span>
      )}
      <button type="submit" className={`button ${styles.loginFormButton}`}>
        {BUTTON_SUBMIT}
      </button>
    </form>
  );
}