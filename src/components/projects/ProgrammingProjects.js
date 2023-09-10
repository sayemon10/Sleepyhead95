"use client";
import Image from "next/image";
import Sidebar from "./Sidebar";
import styles from "./programming.module.css";
import { useState } from "react";
import Ready from "./Ready";

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
          <Sidebar isOpen={true} onClose={() => setOpenedProject(null)}>
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
      </div>
      {/* <div className="sidebar">
        <a href="#" className="closebtn">
          &times;
        </a>
        <p className="sidebarContent">Sidebar information goes here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
      </div> */}
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
      {/* <div className="sidebar">
        <a href="#" className="closebtn">
          &times;
        </a>
        <p className="sidebarContent">Sidebar information goes here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium ea explicabo ipsa debitis ratione, ullam temporibus soluta
          excepturi qui molestias provident similique sapiente, saepe asperiores
          numquam distinctio quam possimus!
        </p>
      </div> */}
    </div>
  );
}
