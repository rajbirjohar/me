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
          <h3 className={`clamp ${css.title}`}>{props.journal.title}</h3>
          <div className={css.analytics}>
            <time suppressHydrationWarning>{format(date, "M.d.yyyy")}</time>
            <Divider />
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
          <p className={css.description}>{props.journal.description}</p>
        </header>
        <div>
          <div className={css.link}>
            <span>
              Read <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
