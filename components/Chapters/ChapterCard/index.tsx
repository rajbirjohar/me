import { format, parseISO } from "date-fns";
import { Chapter } from "contentlayer/generated";
import css from "./styles.module.css";
import { IconArrowRight, IconEye, IconHeart } from "@tabler/icons";
import Link from "next/link";
import Divider from "@/components/Divider";

export default function ChapterCard(props: {
  chapter: Chapter;
  views?: number;
  likes?: number;
}) {
  const date = parseISO(props.chapter.date);
  return (
    <Link href={props.chapter.url} className={css.card}>
      <article className={css.article}>
        <header>
          <div className={css.heading}>
            <div className={css.badge}>{props.chapter.category}</div>
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
          <h3 className={css.title}>{props.chapter.title}</h3>
          <p className={css.description}>{props.chapter.description}</p>
        </header>
        <div>
          <ul className={css.tags}>
            {props.chapter.tags.map((tag: string) => (
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
