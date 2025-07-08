import { getAllJournals } from "@/lib/api";
import styles from "./page.module.css";
import { Journal } from "@/ui/specialized/Journal";

export default function Journals() {
  const journals = getAllJournals();

  return (
    <>
      <section className={styles.section}>
        <h1 className="h1-display">Journals</h1>
      </section>
      <section className={styles.section}>
        {journals.length < 1 && <p>No musings today.</p>}
        {journals.map((journal) => (
          <Journal key={journal.slug} journal={journal} />
        ))}
      </section>
    </>
  );
}
