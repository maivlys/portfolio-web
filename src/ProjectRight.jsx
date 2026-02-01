import styles from "./ProjectRight.module.css";

export function ProjectRight({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.p}>project {project?.number}</p>
        <h4>{project?.title}</h4>
        <p className={styles.desc}>{project?.description}</p>
        <div className={styles.links}>
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
          <button className={styles.btn}>
            <a href={project?.demoURL} target="blank">
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
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.border}>
          <img className={styles.img} src={project?.imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
