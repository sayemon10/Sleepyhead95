import GraphicProjects from "./GraphicProjects";
import ProgrammingProjects from "./ProgrammingProjects";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div id="projects-container" className={styles.projectsContainer}>
      <h2>My work</h2>
      <div className={styles.projectsWrapper}>
        <ProgrammingProjects />
        <GraphicProjects />
      </div>
    </div>
  );
}
