import { useState } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>contact</h2>
      <div className={`${styles.linkedin} ${styles.container}`}>
        <p>connect with me on LinkedIn</p>
        <button className={styles.liBtn}>
          <a href="https://www.linkedin.com/in/sylviamakarova" target="_blank">
            <svg
              className={styles.svg}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z" />
            </svg>
          </a>
        </button>
      </div>
      <div className={`${styles.email} ${styles.container}`}>
        <p>
          or send me an email
          {/* ♡ */}
        </p>
        <button
          className={styles.btn}
          onClick={() => {
            navigator.clipboard.writeText("makarovasylvia@gmail.com");
            setIsCopied(true);
          }}
        >
          <span>makarovasylvia@gmail.com</span>
          {isCopied ? (
            <svg
              className={styles.svg}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              className={styles.svg}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
        <p className={`${styles.copyInfo} ${isCopied && styles.show}`}>
          copied to the clipboard
        </p>
      </div>
    </div>
  );
}
