import { IconArrowUpRight, IconStar } from "@tabler/icons";
import { formatRelative, subDays } from "date-fns";
import { Project } from "types/portfolio";
import css from "./ProjectCard.module.css";

export default function ProjectCard(props: Project): JSX.Element {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer noopener"
      className={css.action}
    >
      <article className={css.wrapper}>
        <div className={css.info}>
          {/* <time className={css.time}>
            {formatRelative(subDays(new Date(props.pushed), 0), new Date())}
          </time> */}
          <h2 className={css.title}>
            {props.title}{" "}
            <IconArrowUpRight width={20} height={20} strokeWidth={2.5} />
          </h2>
          <span className={css.stars}>
            <IconStar fill="var(--fg)" width={16} /> {props.stars}
          </span>
        </div>

        <p className={css.description}>{props.description}</p>
        {props.language && (
          <span className={css.language}>{props.language}</span>
        )}
      </article>
    </a>
  );
}
