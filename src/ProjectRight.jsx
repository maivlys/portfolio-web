import styles from "./ProjectRight.module.css";
import animationStyle from "./index.module.css";

export function ProjectRight({ project }) {
  const inDevelopment = project?.description === "" ? true : false;

  return (
    <div className={styles.container}>
      <div className={`${styles.left} ${animationStyle.block}`}>
        <p className={styles.p}>project {project?.number}</p>
        <h4>{project?.title}</h4>
        <p className={`${styles.desc} ${inDevelopment ? styles.empty : ""}`}>
          {inDevelopment ? "coming soon" : project?.description}
        </p>
        <div className={styles.links}>
          {project?.githubURL && (
            <button className={styles.btn}>
              <a href={project?.githubURL} target="_blank">
                github
                <svg
                  className={styles.svg}
                  width={12}
                  height={12}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </button>
          )}

          {project?.demoURL && (
            <button className={styles.btn}>
              <a href={project?.demoURL} target="_blank">
                live demo
                <svg
                  className={styles.svg}
                  width={12}
                  height={12}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </button>
          )}
        </div>
      </div>
      <div className={`${styles.right} ${animationStyle.block}`}>
        <div className={styles.border}>
          {inDevelopment ? (
            <img className={styles.img} src={project?.imgSrc} alt="" />
          ) : (
            <a href={project?.demoURL} target="_blank" rel="noreferrer">
              <img className={styles.img} src={project?.imgSrc} alt="" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
