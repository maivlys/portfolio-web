import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <button className={styles.btn}>about</button>
          <button className={styles.btn}>my work</button>
          <button className={styles.btn}>contact</button>
        </div>
        <div className={styles.right}>
          <img
            className={styles.signature}
            src="../public/signature/dark-mode/signature.svg"
            alt=""
          />
          <p className={styles.year}>2026</p>
        </div>
      </footer>
      <div className={styles.border}></div>
    </div>
  );
}
