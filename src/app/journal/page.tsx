import { getAllJournals } from "@/lib/api";
import styles from "./page.module.css";
import { Journal } from "@/ui/Journal";
import BlackHoleSimulation from "@/ui/Blackhole";

export default function Journals() {
  const journals = getAllJournals();

  return (
    <>
      <header>
        <h1>Journal</h1>
      </header>
      <section className={styles.journals}>
        {journals.length < 1 && <p>No musings today.</p>}
        {journals.map((journal) => (
          <Journal key={journal.slug} journal={journal} />
        ))}
        {/* <BlackHoleSimulation /> */}
      </section>
    </>
  );
}
