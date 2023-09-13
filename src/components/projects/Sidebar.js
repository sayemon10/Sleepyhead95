import styles from "./sidebar.module.css";

export default function Sidebar({ isOpen, onClick, children }) {
  const sidebarStyles = {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s ease",
  };

  return (
    <div className={styles.sidebar} style={sidebarStyles}>
      <button className={styles.closebtn} onClick={onClick}>
        &times;
      </button>
      {children}
    </div>
  );
}
