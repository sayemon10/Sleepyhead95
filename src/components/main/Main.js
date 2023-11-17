import Image from "next/image";
import styles from "./main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <main id="redirect" className={styles.main}>
      <div className={styles.me}>
        <Image
          src="/portfolio picture.png"
          alt="picture of Janka Antalová"
          width={500}
          height={550}
          priority={true}
        />
      </div>
      <div className={styles.aboutWrapper}>
        <div id="about-me" className={styles.aboutMe}>
          <h2>Hello, I&apos;m Janka!</h2>
          <p>
            Welcome to my portfolio. I am a Front-End developer, Graphic
            Designer, and Illustrator from Slovakia, currently based in Italy.
            <br />
            <br />
            I&apos;ve always enjoyed a good challenge, and moving from art to
            programming has not only been huge, but also hugely rewarding.
            Seeing my designs come to life in the form of fully-functioning
            websites and web apps that others can use has given me an unknown
            sense of satisfaction.
            <br />
            <br />I would like to keep doing that.
          </p>
        </div>
        <div className={styles.workContact}>
          <h3>Open for work</h3>
          <p>
            I am currently looking for job opportunities in the Front-End
            Development and/or Graphic Design fields.&nbsp;
            <span id="connect" className={styles.connect}>
              Let&apos;s connect!
            </span>
          </p>
          <div className={styles.contacts}>
            <Link href="https://twitter.com/antalova_janka" target="_blank">
              <Image
                src="/Icons/b&w/211919_social_twitter_icon.png"
                alt="link to Twitter profile"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jana-antalov%C3%A1-6340a1173/"
              target="_blank"
            >
              <Image
                src="/Icons/b&w/1243560_linkedin_outline_social_icon.png"
                alt="link to LinkedIn profile"
                width={20}
                height={20}
                className={styles.linkedin}
              />
            </Link>
            <Link href="https://github.com/Sleepyhead95" target="_blank">
              <Image
                src="/Icons/b&w/317712_code repository_github_repository_resource_icon.png"
                alt="Link to GitHub profile"
                width={20}
                height={20}
              />
            </Link>
            <Link href="mailto:januska.antalova@gmail.com">
              <Image
                src="/Icons/b&w/3586360_email_envelope_mail_send_icon.png"
                alt="Link to email address"
                width={20}
                height={20}
                className={styles.email}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
