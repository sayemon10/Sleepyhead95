import Image from "next/image";
import styles from "./ready.module.css";

export default function Ready() {
  return (
    <section className={styles.content}>
      <div className={styles.topBanner}>
        <h4 id="up">Read-y</h4>
        <p>(Work in progress)</p>
        <div className={styles.videos}>
          <video
            src="/Ready/mobile video ready.mov"
            width="430"
            autoPlay
            loop
            muted
            playsInline
            type="video/quicktime"
          ></video>
          <video
            src="/Ready/Desktop video ready.mov"
            width="550"
            autoPlay
            loop
            muted
            playsInline
            type="video/quicktime"
            className={styles.videoResize}
          ></video>
        </div>
      </div>
      <div className={styles.ideaContainer}>
        <div className={styles.idea}>
          <h5>Idea</h5>
          <p>
            The purpose of this web/mobile app is to serve as a platform for
            readers and writers of web novels. Essentially, it’s a reader, a
            library, and a publishing platform all in one. <br />
            <br />
            The reader works via Patreon integration, which allows you to
            connect to your Patreon account and access your pledged books, but
            instead of reading them directly on Patreon, you can read them in a
            more user-friendly and less distracting environment - that of
            Read-y. <br />
            <br />
            Our main goal so far is to provide a smooth reading experience for
            the reader, especially on mobile, as this is often the preferred way
            for readers to read but it’s also the less developed feature of most
            reading websites. <br />
            <br />
            In this project, I collaborated with a senior dev, who is
            responsible for the Backend and who has asked me to help him with
            the Frontend, which is now my complete responsibility. I was also
            asked to come up with the design. <br />
            <br />
            Regarding design, we wanted something light, colourful, and
            cheerful, while keeping it quite simple but not necessarily
            minimalist.{" "}
          </p>
          <div className={styles.colour}>
            <h5>Colour Palette</h5>
            <Image
              src="/Ready/colour palette.png"
              alt="colour palette swatches"
              width={800}
              height={200}
            />
            <p>
              {" "}
              I think we’ve been able to achieve simplicity with a light pastel
              colour palette, while keeping it funky and cozy with the repeating
              curved/round shapes and fun illustrations. It is not typical to
              use this many colours in a design, but given that they are very
              light, of similar hues, and not irritating for the eyes, I was
              able to create a colourful design without it being too
              overpowering and tacky.{" "}
            </p>
          </div>
        </div>
        <div className={styles.tech}>
          <h5>Technologies</h5>
          <h6>Programming</h6>
          <div className={styles.programmingIcons}>
            <Image
              src="/Icons/color/js color.svg"
              alt="javascript icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/typescript-icon-color.png"
              alt="typescript icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/html color.svg"
              alt="html icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/css color.svg"
              alt="css icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/next js-icon.png"
              alt="next.js icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/node color.svg"
              alt="node.js icon"
              width={30}
              height={30}
            />
          </div>
          <p>
            This is a Next.js project, where we mainly employ Typescript. I use
            CSS modules for the styling of the individual components in order to
            prevent className clashing and to maintain a simple, readable code.
          </p>
          <h6>Graphic Design</h6>
          <div className={styles.designIcons}>
            <Image
              className={styles.figma}
              src="/Icons/color/figma colorful.png"
              alt="figma icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/ai color.svg"
              alt="illustrator icon"
              width={30}
              height={30}
            />
          </div>
          <p>
            To make the design and the prototypes, I worked in Figma, and the
            illustrations were created in Adobe Illustrator.
          </p>
        </div>
      </div>

      <div className={styles.illustrationsContainer}>
        <h5>Illustrations</h5>
        <div className={styles.illustrationImg}>
          <Image
            src="/Ready/Read-y illustration homepage.png"
            alt="illustrations for the project"
            width={800}
            height={600}
          />
          <Image
            className={styles.resize2}
            src="/Ready/Read-y illustrations2.png"
            alt="illustration for the project"
            width={800}
            height={600}
          />
          <Image
            className={styles.resize1}
            src="/Ready/Read-y illustrations3.png"
            alt="illustration for the project"
            width={800}
            height={600}
          />
          <Image
            className={styles.resize3}
            src="/Ready/Read-y illustrations4.png"
            alt="illustration for the project"
            width={800}
            height={600}
          />
        </div>
      </div>

      <div className={styles.layoutContainer}>
        <h5>Layout</h5>
        <div className={styles.layoutImg}>
          <Image
            src="/Ready/homepage.png"
            alt="homepage image"
            width={800}
            height={600}
          />
          <Image
            src="/Ready/login.png"
            alt="login image"
            width={800}
            height={600}
          />
          <Image
            src="/Ready/book page layout.png"
            alt="book page layout"
            width={800}
            height={600}
          />
          <Image
            src="/Ready/layout mobile.png"
            alt="mobile layout"
            width={800}
            height={600}
          />
        </div>
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
