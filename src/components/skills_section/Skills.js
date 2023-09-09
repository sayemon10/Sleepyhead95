"use client";
import Image from "next/image";
import styles from "./skills.module.css";
import Certificate from "./Certificate.client";

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsContainer}>
          <div className={styles.skills}>
            <h2>Skills</h2>
          </div>
          <div className={styles.skillsIcons}>
            <div className={styles.iconsTopRow}>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/html icon.svg"
                  alt="black and white html icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/html color.svg"
                  alt="html icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/css icon.svg"
                  alt="black and white css icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/css color.svg"
                  alt="css icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/js icon.svg"
                  alt="black and white js icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/js color.svg"
                  alt="js icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/react icon.svg"
                  alt="black and white react icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/react color.svg"
                  alt="react icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/redux icon.svg"
                  alt="black and white redux icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/redux color.svg"
                  alt="redux icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/node icon.svg"
                  alt="black and white node icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/node color.svg"
                  alt="node icon colorful"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className={styles.iconsBottomRow}>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/git icon.svg"
                  alt="black and white git icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/git color.svg"
                  alt="git icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/figma icon.svg"
                  alt="black and white figma icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/figma color.svg"
                  alt="figma icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/ai icon.svg"
                  alt="black and white ai icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/ai color.svg"
                  alt="ai icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/ps icon.svg"
                  alt="black and white ps icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/ps color.svg"
                  alt="ps icon colorful"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bw}
                  src="/Icons/b&w/id icon.svg"
                  alt="black and white id icon"
                  width={50}
                  height={50}
                />
                <Image
                  className={styles.colourful}
                  src="/Icons/color/id color.svg"
                  alt="id icon colorful"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <Certificate />
      </div>
    </section>
  );
}
