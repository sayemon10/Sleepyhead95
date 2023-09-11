"use client";
import Image from "next/image";
import styles from "./graphic.module.css";
import Sidebar from "./Sidebar";
import LushLeaf from "./LushLeaf";
import { useState } from "react";
import BookCovers from "./BookCovers";

export default function GraphicProjects() {
  const [openedProject, setOpenedProject] = useState(null);

  return (
    <div className={styles.graphicDesign}>
      <h3>Graphic Design</h3>
      <div
        className={styles.innerWrapper}
        onClick={() => setOpenedProject("LushLeaf")}
      >
        <div className={styles.text}>
          <h4>LushLeaf</h4>
        </div>
        <div className={styles.designImgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/gradient4.jpg"
            alt="lushleaf see project button"
            width={600}
            height={550}
          />
        </div>
        {openedProject === "LushLeaf" && (
          <Sidebar
            isOpen={true}
            onClick={() => {
              console.log("Close button clicked");
              onClose(null);
            }}
          >
            <LushLeaf />
          </Sidebar>
        )}
      </div>

      <div
        className={styles.innerWrapper}
        onClick={() => setOpenedProject("Book Covers")}
      >
        <div className={styles.text}>
          <h4>Book Covers</h4>
        </div>
        <div className={styles.designImgWrapper1}>
          <h4>See Project</h4>
          <Image
            src="/gradient5.jpg"
            alt="book covers see project button"
            width={600}
            height={550}
          />
        </div>
        {openedProject === "Book Covers" && (
          <Sidebar
            isOpen={true}
            onClick={() => {
              console.log("Close button clicked");
              onClose(null);
            }}
          >
            <BookCovers />
          </Sidebar>
        )}
      </div>

      <div className={styles.innerWrapper}>
        <div className={styles.text}>
          <h4>Assist</h4>
        </div>
        <div className={styles.designImgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/gradient6.jpg"
            alt="assist see project button"
            width={600}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
