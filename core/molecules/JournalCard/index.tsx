import { format, parseISO } from "date-fns";
import { Journal } from "contentlayer/generated";
import css from "./styles.module.css";
import { IconArrowRight, IconEye, IconHeart } from "@tabler/icons";
import Link from "next/link";
import Divider from "core/atoms/Divider";

export default function JournalCard(props: {
  journal: Journal;
  views?: number;
  likes?: number;
}) {
  const date = parseISO(props.journal.date);
  return (
    <Link href={`/journals/${props.journal.slug}`} className={css.card}>
      <article className={css.article}>
        <header>
          <div className={css.heading}>
            <div className={css.badge}>{props.journal.category}</div>
            <div className={css.analytics}>
              <span>
                <IconEye className={css.icon} />
                {props.views ? `${props.views}` : `–––`}
              </span>
              <Divider />
              <span>
                <IconHeart className={css.icon} />{" "}
                {props.likes ? `${props.likes}` : `–––`}
              </span>
            </div>
          </div>
          <h3 className={css.title}>{props.journal.title}</h3>
          <p className={css.description}>{props.journal.description}</p>
        </header>
        <div>
          <ul className={css.tags}>
            {props.journal.tags.map((tag: string) => (
              <li key={tag} className={css.tag}>
                #{tag}
              </li>
            ))}
          </ul>
          <div className={css.link}>
            <span>
              Read <IconArrowRight className={css.icon} strokeWidth={2.5} />
            </span>
            <time className={css.date} suppressHydrationWarning>
              {format(date, "M.d.yyyy")}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
