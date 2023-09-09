import Image from "next/image";
import styles from "./graphic.module.css";

export default function GraphicProjects() {
  return (
    <div className={styles.graphicDesign}>
      <h3>Graphic Design</h3>
      <div className={styles.innerWrapper}>
        <div className={styles.text}>
          <h4>LushLeaf</h4>
        </div>
        <div className={styles.designImgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/flower.jpg"
            alt="lushleaf see project button"
            width={500}
            height={450}
          />
        </div>
      </div>
      {/* <div className="sidebar">
        <a href="#" className="closebtn">
          &times;
        </a>
        <div className="sidebarContent">LushLeaf</div>
        <div className="presentation-images">
          <Image
            src="./Images/lading page main.png"
            alt="presentation image of project"
          />
        </div>
      </div> */}
      <div className={styles.innerWrapper}>
        <div className={styles.text}>
          <h4>Book Covers</h4>
        </div>
        <div className={styles.designImgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/tiles.jpg"
            alt="book covers see project button"
            width={500}
            height={450}
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
          <h4>Assist</h4>
        </div>
        <div className={styles.designImgWrapper}>
          <h4>See Project</h4>
          <Image
            src="/flower folds.jpg"
            alt="assist see project button"
            width={500}
            height={450}
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
