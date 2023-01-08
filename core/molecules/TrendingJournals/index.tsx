import { TrackedJournal } from "types/alpine";
import css from "./styles.module.css";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons";
import Tags from "../Tags";
import { useEffect, useState } from "react";

export default function TrendingJournals(props: {
  journals: TrackedJournal[];
}) {
  const journals = props.journals;

  const sortedJournals = journals
    .sort((a, b) => {
      if (a.likes && b.likes) {
        return b.likes - a.likes;
      }
      return 0;
    })
    .slice(0, 10)
    .map((journal) => journal);

  const allTags = sortedJournals.flatMap((journals) => journals.tags);

  const uniqueTags = new Set<string>(allTags);

  return (
    <aside className={css.aside}>
      <h4>Top</h4>
      <Tags tags={Array.from(uniqueTags).slice(0, 5)} />
      <h4>Trending</h4>
      <div className={css.popular}>
        {sortedJournals.map((journal) => (
          <Link
            key={journal.title}
            href={`/journals/${journal.slug}`}
            className={css.link}
          >
            <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            <span>{journal.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
