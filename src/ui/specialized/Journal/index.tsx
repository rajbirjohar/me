import Link from "next/link";
import styles from "./styles.module.css";
import { format } from "date-fns";

const Journal = ({ journal }: { journal: Journal }) => {
  return (
    <article key={journal.slug} className={styles.article}>
      <Link href={`/journal/${journal.slug}`} className={styles.link}>
        {journal.title}
      </Link>
      <div className={styles.underline} />
      <time>{format(journal.date, "M.d.y")}</time>
    </article>
  );
};

export { Journal };
