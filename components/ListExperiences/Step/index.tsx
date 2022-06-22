import { IconArrowUpRight } from "@tabler/icons";
import { Experience } from "types/portfolio";
import css from "./Step.module.css";

export default function Step(props: Experience): JSX.Element {
  return (
    <li className={css.wrapper}>
      <div className={css.icon}>
        <props.icon width={20} />
      </div>
      <div>
        {props.url ? (
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer noopener"
            className={css.action}
          >
            <h2 className={css.title}>
              {props.title}{" "}
              {props.position && (
                <>
                  - <span>{props.position}</span>
                </>
              )}
            </h2>
            <IconArrowUpRight width={20} />
          </a>
        ) : (
          <h2 className={css.title}>
            {props.title}{" "}
            {props.position && (
              <>
                - <span>{props.position}</span>
              </>
            )}
          </h2>
        )}

        <time className={css.date}>
          {props.startDate} {props.endDate && <>- {props.endDate}</>}
        </time>
        <p dangerouslySetInnerHTML={{ __html: props.caption }} />
      </div>
    </li>
  );
}
