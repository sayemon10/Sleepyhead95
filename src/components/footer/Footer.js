import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <h2>Stay in touch!</h2>
      </div>
      <div className={styles.line}></div>
      <div className={styles.contact_icons}>
        <Link href="https://twitter.com/antalova_janka" target="_blank">
          <Image
            src="/Icons/b&w/211919_social_twitter_icon.png"
            alt="link to Twitter profile"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jana-antalov%C3%A1-6340a1173/"
          target="_blank"
        >
          <Image
            src="/Icons/b&w/1243560_linkedin_outline_social_icon.png"
            alt="link to LinkedIn profile"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://github.com/Sleepyhead95" target="_blank">
          <Image
            src="/Icons/b&w/317712_code repository_github_repository_resource_icon.png"
            alt="Link to GitHub profile"
            width={30}
            height={30}
          />
        </Link>
        <Link href="mailto:januska.antalova@gmail.com">
          <Image
            src="/Icons/b&w/3586360_email_envelope_mail_send_icon.png"
            alt="Link to email address"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
}
