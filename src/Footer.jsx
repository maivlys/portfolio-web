import styles from "./Footer.module.css";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

export function Footer() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <button className={styles.btn}>about</button>
          <button className={styles.btn}>projects</button>
          <button className={styles.btn}>contact</button>
        </div>
        <div className={styles.right}>
          <img
            className={styles.signature}
            src={`/signature/${theme === "dark" ? "dark" : "light"}-mode/signature.svg`}
            alt="signature-image"
          />
          <p className={styles.year}>2026</p>
        </div>
      </footer>
      <div className={styles.border}></div>
    </div>
  );
}
