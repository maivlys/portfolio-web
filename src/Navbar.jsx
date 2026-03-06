import styles from "./Navbar.module.css";
import "./global.css";
import "./index.module.css";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

export function Navbar({ toggle }) {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <svg
            onClick={() => {
              toggle();
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className={styles.svg}
            width={22}
            height={22}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            {theme === "dark" ? (
              <>
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" />
                <path d="M12 1v2" />
                <path d="M12 21v2" />
                <path d="m4.22 4.22 1.42 1.42" />
                <path d="m18.36 18.36 1.42 1.42" />
                <path d="M1 12h2" />
                <path d="M21 12h2" />
                <path d="m4.22 19.78 1.42-1.42" />
                <path d="m18.36 5.64 1.42-1.42" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            )}
          </svg>
        </div>
        <div className={styles.sections}>
          <button className={styles.button}>about</button>
          <button className={styles.button}>projects</button>
          <button className={styles.button}>contact</button>
        </div>
      </nav>
    </div>
  );
}
