"use client";
import Image from "next/image";
import styles from "./certificate.module.css";
import { useEffect } from "react";

export default function Certificate() {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("my-button");
    const span = document.getElementById("close");

    const showModal = () => (modal.style.display = "flex");
    const hideModal = () => (modal.style.display = "none");
    const checkOutsideClick = (event) => {
      if (event.target == modal) {
        hideModal();
      }
    };

    btn.addEventListener("click", showModal);
    span.addEventListener("click", hideModal);
    window.addEventListener("click", checkOutsideClick);

    // Cleanup: Remove the event listeners if the component is unmounted.
    return () => {
      btn.removeEventListener("click", showModal);
      span.removeEventListener("click", hideModal);
      window.removeEventListener("click", checkOutsideClick);
    };
  }, []);
  return (
    <div className={styles.certificate}>
      <h3>Certificate</h3>
      <p>Front-End Engineer | Codecademy</p>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span id="close" className={styles.close}>
            &times;
          </span>
          <Image
            src="/Certificate.png"
            alt="certificate of completion, Codecademy, Frontend engineer"
            width={800}
            height={600}
          />
        </div>
      </div>
      <button id="my-button" className={styles.button}>
        See Certificate
      </button>
    </div>
  );
}
