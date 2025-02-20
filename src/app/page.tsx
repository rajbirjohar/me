import styles from "./page.module.css";
import { getAllJournals } from "@/lib/api";
import { Journal } from "@/ui/Journal";
import { Theme } from "@/ui/Theme";

export default function Home() {
  const journals = getAllJournals();

  return (
    <div className={styles.article}>
      <header className={styles.header}>
        <div className={styles.titlewrapper}>
          <h1 className={styles.title}>Rajbir Johar</h1> <Theme />
        </div>
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
