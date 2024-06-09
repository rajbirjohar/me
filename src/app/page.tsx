import Link from "next/link";
import styles from "./page.module.css";
import { getAllJournals } from "@/lib/api";
import { Journal } from "@/ui/Journal";

export default function Home() {
  const journals = getAllJournals();

  return (
    <>
      <header>
        <h1>Rajbir Johar</h1>
        <p>CSS is my jam.</p>
      </header>
      <section className={styles.journals}>
        {journals.length < 1 && <p>No musings today.</p>}
        {journals.map((journal) => (
          <Journal key={journal.slug} journal={journal} />
        ))}
      </section>
    </>
  );
}
