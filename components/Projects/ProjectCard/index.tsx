import Link from "next/link";
import { Project } from "types/alpine";
import css from "./styles.module.css";
import { IconArrowRight, IconStar } from "@tabler/icons";
import { formatDistance } from "date-fns";

export default function ProjectCard(props: { project: Project }) {
  const { project } = props;
  return (
    <Link href={project.url} className={css.card} target="_blank">
      <article className={css.article}>
        <header>
          <div className={css.heading}>
            {project.language ? (
              <div className={css.badge}>{project.language}</div>
            ) : (
              <div className={css.empty} />
            )}
            <div className={css.analytics}>
              <span>
                <IconStar className={css.icon} /> {project.stars}
              </span>
            </div>
          </div>
          <h3>{project.title}</h3>
          {project.description && (
            <p className={`${css.description} clamp-3`}>
              {project.description}
            </p>
          )}
        </header>
        <div className={css.link}>
          <span>
            Explore <IconArrowRight className={css.icon} strokeWidth={2.5} />
          </span>
          <time className={css.date}>
            {formatDistance(new Date(project.pushed), new Date(), {
              addSuffix: true,
            })}
          </time>
        </div>
      </article>
    </Link>
  );
}
