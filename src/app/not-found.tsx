import Link from "next/link";
import styles from "./not-found.module.css";
import Image from "next/image";
import greg from "/public/greg.png";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>You&#39;ve reached uncharted territory.</h1>
      <p>
        <Link href="/">Go Home</Link>
      </p>
      <Image
        src={greg}
        alt="Greg from Over the Garden Wall"
        className={styles.image}
      />
    </div>
  );
}
