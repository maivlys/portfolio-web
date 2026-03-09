import styles from "./Projects.module.css";
import data from "./data/projects.json";
import { ProjectRight } from "./ProjectRight";
import { ProjectLeft } from "./ProjectLeft";
import animationStyle from "./index.module.css";

export function Projects() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.section}>
        <h2 className={animationStyle.block}>projects</h2>
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
