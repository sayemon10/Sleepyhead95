import styles from "./sidebar.module.css";

export default function Sidebar({ isOpen, onClose, children }) {
  const sidebarStyles = isOpen
    ? {
        transform: "translateX(0)",
      }
    : {};

  return (
    <div className={styles.sidebar} style={sidebarStyles}>
      <button className={styles.closebtn} onClick={onClose}>
        &times;
      </button>
      {children}
      {/* This is where the specific project details will be rendered */}
    </div>
  );
}
