import styles from "./Intro.module.css";

export function Intro(params) {
  return (
    <div className={styles.intro}>
      <h2>about me</h2>
      <div className={styles.content}>
        <div className="left">
          <p>who am i</p>
        </div>

        <div className="right">
          <p>my skills</p>
        </div>
      </div>
    </div>
  );
}
