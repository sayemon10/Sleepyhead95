import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.myName}>
        <p className={styles.fullName}>Janka Antalová</p>
        <p className={styles.JA}>JA</p>
      </div>
      <div className={styles.line}></div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#redirect">About</a>
          </li>
          <li>
            <a href="#projects-container">Projects</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
