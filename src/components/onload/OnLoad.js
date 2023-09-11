// import { useState, useEffect, useRef } from "react";
// import styles from "./onload.module.css";

// export default function OnLoad({ onComplete }) {
//   const [typedName, setTypedName] = useState("");
//   const [introVisible, setIntroVisible] = useState(true);
//   const introScreenRef = useRef(null);

//   let name = "Janka Antalová";
//   let i = 0;

//   useEffect(() => {
//     setTimeout(typeWriter, 1100);
//   }, []);

//   function typeWriter() {
//     if (i < name.length) {
//       setTypedName((prevName) => prevName + name.charAt(i));
//       setTimeout(typeWriter, 150);
//       i++;
//     } else {
//       closeIntro();
//     }
//   }
//   function closeIntro() {
//     if (introScreenRef.current) {
//       introScreenRef.current.style.animation = "closeIntro 1.5s forwards 1s";
//       introScreenRef.current.addEventListener("animationend", () => {
//         setIntroVisible(false);
//         onComplete(); // Notify parent that the intro has completed
//       });
//     }
//   }

//   return introVisible ? (
//     <section
//       id="intro-screen"
//       ref={introScreenRef}
//       className={styles.fullscreen}
//     >
//       {" "}
//       <h1>{typedName}</h1>
//     </section>
//   ) : null;
// }
