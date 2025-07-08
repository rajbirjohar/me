import Link from "next/link";
import styles from "./styles.module.css";
import { Theme } from "../Theme";
import LastUpdated from "@/ui/specialized/LastUpdated";
import { ArrowUpRightIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div>
            <p className={styles.tag}>
              Inspired by the endless wonderful designs on the web.
            </p>
            <LastUpdated />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.links}>
            <h4>Elsewhere</h4>
            <Link
              href="https://github.com/rajbirjohar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Github <ArrowUpRightIcon />
            </Link>
          </div>
          <div className={styles.links}>
            <h4>Contact</h4>
            <a>hello@rajbir.io</a>
          </div>
        </div>
      </div>
      <Theme />
    </footer>
  );
};
