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
        <div className={css.heading}>
          <h2 className={css.title}>
            {props.title} <IconArrowUpRight width={20} />
          </h2>

          <span className={css.stars}>
            {props.stars} <IconStar width={16} />
          </span>
        </div>
        <p className={css.description}>{props.description}</p>
        <div className={css.info}>
          <time className={css.time}>
            {formatRelative(subDays(new Date(props.pushed), 0), new Date())}
          </time>
          {props.language && (
            <span className={css.language}>{props.language}</span>
          )}
        </div>
      </article>
    </a>
  );
}
