import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <svg
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
            <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" />
            <path d="M12 1v2" />
            <path d="M12 21v2" />
            <path d="m4.22 4.22 1.42 1.42" />
            <path d="m18.36 18.36 1.42 1.42" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="m4.22 19.78 1.42-1.42" />
            <path d="m18.36 5.64 1.42-1.42" />
          </svg>
        </div>
        <div className={styles.sections}>
          <button className={styles.button}>about me</button>
          <button className={styles.button}>my work</button>
          <button className={styles.button}>contact</button>
        </div>
      </nav>
    </div>
  );
}
