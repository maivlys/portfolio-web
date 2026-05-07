import styles from "./Intro.module.css";
import animationStyle from "./index.module.css";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

export function Intro(params) {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div id="intro" className={styles.intro}>
      <h2 className={`${styles.h2} ${animationStyle.block}`}>about</h2>
      <div className={`${styles.content}`}>
        <div className={`${styles.left} ${animationStyle.block}`}>
          <p className={styles.p}>who am i</p>
          <p className={styles.desc}>
            A frontend developer who speaks design and values structured logic.
            I bridge “the nice” with “the functional”. Currently collaborating
            globally, thinking locally, and obsessed with the little details
            most people miss. Also slightly obsessed with The Office.
          </p>
        </div>

        <div className={`${styles.right} ${animationStyle.block}`}>
          <p className={styles.p}>my skills</p>
          <div className={styles.skills}>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/html5.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>HTML5</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/css.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>CSS3</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/javascript.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>JavaScript</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/react.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>React</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/typescript.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>TypeScript</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/tailwindcss.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>Tailwind CSS</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/github.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>GitHub</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/git.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>Git</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/apis.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>REST API</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/vscode.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>VS Code</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/responsivness.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>Responsive Desing</p>
            </div>
            <div className={styles.iconCnt}>
              <img
                className={styles.img}
                src={`/skills-icons/${theme === "dark" ? "dark" : "light"}-mode/figma.svg`}
                alt=""
              />
              <p className={styles.skillTitle}>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
