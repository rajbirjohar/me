import Link from "next/link";
import styles from "./styles.module.css";
import { Theme } from "../Theme";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.section}>
          <Link href={"/"} className={styles.logo}>
            Inspired by the many great designs on the web. 
          </Link>
        </div>
        <div className={styles.section}>
          <div className={styles.links}>
            <h6>Elsewhere</h6>
            <Link
              href="https://github.com/rajbirjohar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </div>
          <div className={styles.links}>
            <h6>Contact</h6>
            <a>hello@rajbir.io</a>
          </div>
        </div>
      </div>
      <Theme />
    </footer>
  );
};
