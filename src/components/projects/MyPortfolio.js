import Image from "next/image";
import styles from "./portfolio.module.css";

export default function MyPortfolio() {
  return (
    <section className={styles.portfolioContainer}>
      <h4 id="up">Personal Portfolio</h4>
      <div className={styles.topContainer}>
        <div className={styles.idea}>
          <h5>Idea</h5>
          <p>
            In my first design, I wanted my portfolio to be extremely
            eye-catching and unique - I wanted to attract the visitor’s
            attention with cool visuals. Thus, I went for bright colours, and
            bold, geometric shapes that created an interesting composition. I
            was inspired by 60s and 70s interior design, but I also wanted to
            keep it modern and fresh. <br />
            <br />
            But once I coded it, I didn’t like how it looked in the browser. It
            was too busy and not professional enough. So, for my second design,
            I kept the bright yellow as my main colour, but I drastically toned
            down everything else. I replaced the geometric shapes with a simpler
            image inspired by Bauhaus, an artistic movement from the 1930s. But
            again, I still felt like the pages were too crowded and with little
            useful content.
            <br />
            <br />
            Thus, for my third and last design, I decided to get rid of all the
            extra images, keeping only the grainy gradient background that could
            finally stand out. I also got rid of the landing/welcome page, which
            didn’t really serve any purpose. By having the information about me
            immediately available at first glance, I think it ensures that the
            visitor to my portfolio will actually get what they came for - who I
            am and what I do.{" "}
          </p>
          <h5>Colour Palette</h5>
          <Image
            src="/portfolio/colour palette.png"
            alt="portfolio colour palette"
            className={styles.colourPalette}
            width={1200}
            height={400}
          />
          <p>
            Unlike in my other project, Read-y, I kept this colour palette
            extremely simple, using only 3 colours - yellow, dark gray, and
            creamy white. I purposefully chose softer, more grayish hues of
            these colours in order to avoid the website looking like a bumble
            bee. Nothing against bumble bees, I just think it looks more
            professional like this.
          </p>
        </div>
        <div className={styles.techColour}>
          <h5>Technologies</h5>
          <h6>Programming</h6>
          <div className={styles.techIcons}>
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
              src="/Icons/color/js color.svg"
              alt="javascript icon"
              width={30}
              height={30}
            />
            <Image
              src="/Icons/color/next js-icon.png"
              alt="next.js icon"
              width={30}
              height={30}
            />
          </div>
          <p>
            I wanted this to be a simple static website, so I began with only
            vanilla HTML, CSS, and some JavaScript. But as I kept adding more
            and more lines of code, it became quite complex and hard to keep
            organized. I also encountered some bugs that kept causing
            interference with some HTML elements. <br />
            <br /> So, in order to simplify the organization process and to make
            the page more sufficient, I decided to re-code it as a Next.js
            website. This way, I could use React-like components while keeping
            the site SEO-friendly and quick.{" "}
          </p>
          <h6>Graphic Design</h6>
          <div className={styles.designIcons}>
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
            I used mainly Figma to create the layout of the portfolio pages. I
            also used Adobe Illustrator and Adobe Photoshop to produce the
            background image, as well as the other, geometric images that I
            ended up not using. I likewise created all the icons of the various
            technologies in Illustrator.{" "}
          </p>
        </div>
      </div>
      <div className={styles.layout}>
        <h5>Layout & Design Stages</h5>
        <div className={styles.layoutImg}>
          <h6>Version 1</h6>
          <Image
            src="/portfolio/stage1.1.png"
            alt="stage 1 of portfolio design"
            width={2000}
            height={1000}
          />
          <Image
            src="/portfolio/stage1.2.png"
            alt="stage 1.2 of portfolio design"
            width={2000}
            height={1800}
          />
          <h6>Version 1 - Mobile</h6>
          <Image
            src="/portfolio/stage1 mobile.png"
            alt="stage 1 mobile of portfolio design"
            width={2000}
            height={1800}
          />
          <h6>Version 2</h6>
          <Image
            src="/portfolio/stage2.png"
            alt="stage 2 of portfolio design"
            width={2000}
            height={1800}
          />
          <h6>Version 3</h6>
          <Image
            src="/portfolio/stage3.png"
            alt="stage 3 of portfolio design"
            width={2000}
            height={1800}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <p>Button image credit: Photo by Thomas Lefebvre on Unsplash.</p>
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
