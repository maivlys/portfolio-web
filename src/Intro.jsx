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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
