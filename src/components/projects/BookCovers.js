import Image from "next/image";
import styles from "./bookcovers.module.css";

export default function BookCovers() {
  return (
    <section className={styles.container}>
      <h4 id="up">Book Covers</h4>
      <div className={styles.topBanner}>
        <Image
          src="/Book covers/casual_heroing_covers.png"
          alt="presentation image of project"
          width={2000}
          height={1800}
          priority={true}
        />
      </div>
      <div className={styles.ideaInspoText}>
        <div className={styles.ideaText}>
          <h5>Idea</h5>
          <p>
            The client’s desire was to create book covers for his fantasy novel
            that would be eye-catching yet simple.
            <br />
            <br />
            To achieve this goal, we decided to work with monochromatic
            palettes, each one specific for the mood of the different volumes.
            We also chose only to depict a single element, something that was
            symbolic of each volume and that carried some meaning for the story.{" "}
            <br />
            <br />
            In terms of style, we kept the forms simplified and abstracted, but
            still recognizable as those objects. We wanted to give the objects
            more of a ‘fantasy’ feeling with a sort of “net” of lines that
            essentially composed the objects. What further added to the whole
            whimsical vibe were the little glowing light dots that emanated from
            the objects. <br />
            <br />
            We kept the background dark and toned down so that our images could
            really pop out and produce an almost 3D effect.
          </p>
        </div>

        <div className={styles.tech}>
          <h5>Technologies</h5>
          <div className={styles.techImg}>
            <Image
              src="/Icons/color/ai color.svg"
              alt="adobe illustrator icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/ps color.svg"
              alt="adobe photoshop icon"
              width={30}
              height={30}
            />
          </div>
          <p>
            Each image was created in Adobe Illustrator. Once finished, I added
            the writing and some additional stylistic changes in Adobe
            Photoshop.
            <br />
            <br />
            <strong>What I learned</strong>
            <br />
            <br />
            Thanks to the extremely detailed ‘net’ that functioned as the
            skeleton for the objects, I mastered the Pen tool. I also learned
            how to create and use gradients and how to layer different paths and
            layers in order to create depth. <br />
            <br />
            Additionally, I learned how to create a ‘light’ or ‘halo’ effect,
            which I combined with the Brush tool to create the glowing dots that
            really looked as if they were made of light.
            <br />
            <br />
            When working in Photoshop, I learned how to apply that same kind of
            ‘halo’ effect on writing, using various effects, such as Gaussian
            blur, outer and inner glow, etc.
          </p>
        </div>
      </div>

      <div className={styles.stages}>
        <Image
          src="/Book covers/Flame-stages.png"
          alt="stages of design"
          width={1000}
          height={800}
        />
      </div>
      <div className={styles.footer}>
        <p>Button image credit: Photo by mymind on Unsplash.</p>
        <a href="#up">
          <Image
            src="/Icons/b&w/2931161_arrow_top_up_direction_move_icon.png"
            alt="back to top button"
            width={30}
            height={30}
          />
        </a>
      </div>
    </section>
  );
}
