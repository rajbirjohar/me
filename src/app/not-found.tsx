import { Pong } from "@/ui/Pong";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <header className={styles.notFound}>
        <h1>Not Found</h1>
        <p>But that&#39;s okay.</p>
      </header>
      <Pong />
    </>
  );
}
