import GraphicProjects from "./GraphicProjects";
import ProgrammingProjects from "./ProgrammingProjects";
import styles from "./projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects-container" className={styles.projectsContainer}>
      <h2>My work</h2>
      <div className={styles.projectsWrapper}>
        <ProgrammingProjects />
        <GraphicProjects />
      </div>
      <div className={styles.redirect}>
        <a href="#redirect">
          <Image
            src="/Icons/b&w/2931161_arrow_top_up_direction_move_icon.png"
            alt="back to top button"
            width={40}
            height={40}
          />
        </a>
      </div>
    </section>
  );
}
