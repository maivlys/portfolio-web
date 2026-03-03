import styles from "./Hero.module.css";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

export function Hero() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.h1}>portfolio</h1>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <p className={styles.txt}>
              hi! i'm a <span>junior frontend developer</span> who enjoys
              building clean designs with thoughtful details{" "}
            </p>
            <span>
              <button className={styles.btn}>
                contact me{" "}
                <svg
                  className={styles.svg}
                  width={20}
                  height={20}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </span>
          </div>
          <div className={styles.middleRight}>
            <div
              className={`${styles.circle} ${styles[theme === "dark" ? "dark" : "light"]}`}
            />
            {/* <div className={`${styles.circle} ${styles.dark}`} />
            <div className={`${styles.circle} ${styles.light}`} /> */}
            {/* <div className={styles.gradient}>
              <img
                className={styles.img}
                src={`./public/hero/${theme === "dark" ? "dark" : "light"}-mode/gradient.png`}
                alt=""
              />
            </div> */}
            <div className={styles.photo}>
              <img
                className={styles.img}
                src={`//hero/${theme === "dark" ? "dark" : "light"}-mode/photo.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <span className={styles.email}>
          <svg
            width={20}
            height={20}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          <p>makarovasylvia@gmail.com</p>
        </span>
      </div>
    </div>
  );
}
