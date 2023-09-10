"use client";
import Image from "next/image";
import Sidebar from "./Sidebar";
import styles from "./programming.module.css";
import { useState } from "react";
import Ready from "./Ready";
import MyPortfolio from "./MyPortfolio";

export default function ProgrammingProjects() {
  const [openedProject, setOpenedProject] = useState(null);

  return (
    <div className={styles.programming}>
      <h3>Programming</h3>
      <div
        className={styles.innerWrapper}
        onClick={() => setOpenedProject("Read-y")}
      >
        <div className={styles.text}>
          <h4>Read-y</h4>
        </div>
        <div className={styles.imgWrapper1}>
          <h4>See Project</h4>
          <Image
            src="/gradient1.jpg"
            alt="ready see project button"
            width={600}
            height={550}
          />
        </div>

        {openedProject === "Read-y" && (
          <Sidebar
            isOpen={true}
            onClick={() => {
              console.log("Close button clicked");
              onClose(null);
            }}
          >
            <Ready />
          </Sidebar>
        )}
      </div>

      <div className={styles.innerWrapper}>
        <div className={styles.text}>
          <h4>Personal Portfolio</h4>
        </div>
        <div className={styles.imgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/gradient2.jpg"
            alt="portfolio see project button"
            width={600}
            height={550}
          />
        </div>
        {openedProject === "Personal Portfolio" && (
          <Sidebar
            isOpen={true}
            onClick={() => {
              console.log("Close button clicked");
              onClose(null);
            }}
          >
            <MyPortfolio />
          </Sidebar>
        )}
      </div>

      <div className={styles.innerWrapper}>
        <div className={styles.text}>
          <h4>OneCom</h4>
        </div>
        <div className={styles.imgWrapper1}>
          <h4>See Project</h4>
          <Image
            src="/gradient3.jpg"
            alt="OneCom see project button"
            width={600}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
