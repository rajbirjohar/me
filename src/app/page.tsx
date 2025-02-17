import styles from "./page.module.css";
import { getAllJournals } from "@/lib/api";
import { Journal } from "@/ui/Journal";

export default function Home() {
  const journals = getAllJournals();

  return (
    <div className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rajbir Johar</h1>
        <p>
          I enjoy building aesthetic, accessible, and performant user
          interfaces.
        </p>
      </header>
      <section className={styles.journals}>
        {journals.length < 1 && <p>No musings today.</p>}
        {journals.map((journal) => (
          <Journal key={journal.slug} journal={journal} />
        ))}
      </section>
    </div>
  );
}
