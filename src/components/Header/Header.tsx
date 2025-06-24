import logo from "../../assets/icons/logo.svg";
import { Navbar } from "../Navbar/Navbar";
import { useUser } from "../../context/UserContext";
import styles from "./style.module.css";

export function Header() {
  const { user } = useUser();

  return (
    <div className={styles.header}>
      <div className={`${styles.container} container`}>
        <a href="#">
          <img src={logo} alt="Logo" className={styles.headerLogo} />
        </a>
        {user?.username && <Navbar />}
      </div>
    </div>
  );
}