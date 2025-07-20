import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import greg from "/public/greg.png";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>You&#39;ve reached uncharted territory.</h1>
      <p>
        <Link href="/" className={styles.link}>
          <HomeIcon /> Go Home
        </Link>
      </p>
      <Image
        src={greg}
        alt="Greg from Over the Garden Wall"
        className={styles.image}
      />
    </div>
  );
}
