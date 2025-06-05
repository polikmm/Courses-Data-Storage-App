import { useUser } from "../../context/UserContext";
import styles from "./style.module.css";
import { BUTTON_LOGOUT } from "../../constants";

export function Navbar() {
  const { user, setUser } = useUser();

  const logout = async () => {
    localStorage.removeItem("token");
    setUser({
      username: null,
      token: null,
    });
  };

  return (
    <nav className={styles.menu}>
      <h3 className={styles.userName}>{user?.username}</h3>
      <button className="button" onClick={logout}>
        {BUTTON_LOGOUT}
      </button>
    </nav>
  );
}