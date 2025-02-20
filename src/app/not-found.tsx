import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <header className={styles.nf}>
        <h1>You've reached uncharted territory.</h1>
        <p>
          <Link href="/">Go Home</Link>
        </p>
      </header>
    </>
  );
}
