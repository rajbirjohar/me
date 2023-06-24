import { Metadata } from "next";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <article className={styles.root}>
      <h1>These are uncharted waters.</h1>
      <p>Check back later when I finish drawing up the maps.</p>
      <p></p>
    </article>
  );
}
