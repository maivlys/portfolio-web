import styles from "./Projects.module.css";
import data from "./data/projects.json";
import { ProjectRight } from "./ProjectRight";
import { ProjectLeft } from "./ProjectLeft";

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>my work</h2>
        <div className={styles.projects}>
          {data.map((project, i) => {
            if (i % 2 === 0) {
              return <ProjectRight project={project} />;
            } else {
              return <ProjectLeft project={project} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
