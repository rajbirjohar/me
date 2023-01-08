import { format, parseISO } from "date-fns";
import { Journal } from "contentlayer/generated";
import css from "./styles.module.css";
import { IconArrowRight, IconEye, IconHeart } from "@tabler/icons";
import Link from "next/link";
import Divider from "core/atoms/Divider";
import { TrackedJournal } from "types/alpine";

export default function JournalCard(props: { journal: TrackedJournal }) {
  const journal = props.journal;
  const date = parseISO(journal.date);
  return (
    <Link href={`/journals/${journal.slug}`} className={css.card}>
      <article className={css.article}>
        <header>
          <h3 className={`clamp ${css.title}`}>{journal.title}</h3>
          <div className={css.analytics}>
            <time className={css.date} suppressHydrationWarning>
              {format(date, "M.d.yyyy")}
            </time>
            <Divider />
            <div className={css.analytic}>
              <IconEye className={css.icon} />
              <span>{journal.views ? `${journal.views}` : `–––`}</span>
            </div>
            <Divider />
            <div className={css.analytic}>
              <IconHeart className={css.icon} />{" "}
              <span>{journal.likes ? `${journal.likes}` : `–––`}</span>
            </div>
          </div>
        </header>
        <p className={css.description}>{journal.description}</p>
        <div className={css.link}>
          Read <IconArrowRight className={css.arrow} strokeWidth={2.5} />
        </div>
      </article>
    </Link>
  );
}
