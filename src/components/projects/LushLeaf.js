import Image from "next/image";
import styles from "./lushleaf.module.css";

export default function LushLeaf() {
  return (
    <section className={styles.container}>
      <h4 id="up">LushLeaf</h4>
      <div className={styles.topBanner}>
        <Image
          src="/LushLeaf/lusheaf8.png"
          alt="presentation image of project"
          width={1200}
          height={1000}
        />
        <video
          src="/LushLeaf/LushLeaf_video.mov"
          width="430"
          autoPlay
          loop
          muted
          playsInline
          type="video/quicktime"
        ></video>
      </div>
      <div className={styles.ideaInspo}>
        <div className={styles.ideaText}>
          <h5>Idea</h5>
          <p>
            Since I live abroad, I don&apos;t go home often, which means
            I&apos;ll miss a lot of birthdays and other celebrations. One way I
            like to make up for it is to send a bouquet of flowers to the family
            member that&apos;s celebrating. <br />
            <br />
            Every time, I try a different delivery service/florist because I
            like having the variety. However, there&apos;s one thing that almost
            all of them have in common - their websites have quite a dated
            design, the UX is not ideal, and generally, they could use a little
            improvement. <br />
            <br />
            So, I told myself, why not design a flower shop/flower delivery
            service web app that would look modern, chic and that was also fast
            and user-friendly.
          </p>
        </div>
        <div className={styles.inspiration}>
          <h5>Inspiration</h5>
          <Image
            src="/LushLeaf/inspo-lushleaf.png"
            alt="project inspiration"
            width={900}
            height={600}
          />
        </div>
      </div>
      <div className={styles.colourFontSection}>
        <div className={styles.colour}>
          <h5>Colour Palette</h5>
          <Image
            src="/LushLeaf/colour palette lushleaf.png"
            alt="swatches of colours used in design"
            width={900}
            height={300}
          />
          <p>
            I wanted to avoid the typical greens that are often highly saturated
            shades that don&apos;t always look neat when combined with other
            colours - considering that this is a flower shop and that the images
            of the flowers will be already very colourful, I chose a more muted
            colour palette. <br />
            <br />I opted for a deep, warm brown instead of black or grey,
            combined with a soft, warm yellowish-green for the background. As an
            accent colour, I chose a more vibrant yellow-green colour in order
            to maintain the whole earthy plant vibe, without being too
            over-powering.
          </p>
        </div>
        <div className={styles.fonts}>
          <h5>Fonts</h5>
          <p>
            I opted for a highly modern, slightly futuristic-looking font,
            Genos, to be the main font. I also used it in the logo in order to
            maintain visual coherence throughout the website.
            <br />
            <br />
            As this font is quite bold, I chose to pair it with an extremely
            simple sans-serif font, Mulish, to ensure readability and to avoid
            font style clashing.
          </p>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.layoutText}>
          <h5>Layout</h5>
          <p>
            Usually, I start designing for desktop, but since I&apos;ve never
            made a mobile-first design, I decided to challenge myself and make
            this a mobile-first project. Project made entirely in Figma.
            <br />
            <br />
            <strong>Landing page</strong>
            <br />
            <br />
            I wanted to peak the visitor&apos;s interest right off the bat with
            a landing page that relies heavily on beautiful images of plants
            that have a rather unique and interesting feel to them. I wanted the
            visitor to immediately see what they could get if they continued
            scrolling through the website. I decided to make it dynamic by
            making the images into a carousel, so that the audience can swipe
            through the images and get an idea what the shop is offering. <br />
            <br />
            <strong>Home page</strong> <br />
            <br />I chose to keep the home page quite minimal, with a
            &apos;latest offers&apos; carousel on the top and a search bar
            underneath for easy access to other parts of the website. Below
            that, I included some buttons that will bring the user directly to
            the designated pages - here, my main focus was the bouquet delivery
            service and the possibility of creating your own bouquet. Under the
            buttons, I decided to incorporate a few reasons why LushLeaf was the
            best choice for the customer. All along the bottom, there&apos;s a
            banner with icons for easy access to the home page, the user&apos;s
            profile page, the basket and favourites. On the top, there&apos;s a
            hamburger menu that slides out to the side, showing different
            categories that the customer can browse through. <br />
            <br />
            <strong>Products page</strong> <br />
            <br />
            I kept it quite standard. It&apos;s simple, with an emphasis on
            images - after all, we are dealing with flowers, so the images will
            be highly captivating for the customer.
            <br />
            <br />
            <strong>Make your bouquet</strong> <br />
            <br />
            This concept is divided into three steps: 1. pick your flowers 2.
            pick the greenery and decorations 3. order summary with the option
            of adding a greeting card. This way, the customer has complete
            freedom over creating exactly the type of bouquet they desire.
          </p>
        </div>
        <div className={styles.layoutImg}>
          <h5>Wireframes & Design</h5>
          <div className={styles.bottomImg}>
            <Image
              src="/LushLeaf/wireframes1.png"
              alt="wireframes of the design"
              width={900}
              height={600}
            />
            <Image
              src="/LushLeaf/design1.png"
              alt="images of the design"
              width={900}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          All images used in this project are for personal use only. <br />
          <br />
          Button image credit: Photo by mymind on Unsplash.
        </p>
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
