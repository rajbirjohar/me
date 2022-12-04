import ExternalLink from "@/components/ExternalLink";
import { IconArrowUpRight } from "@tabler/icons";
import { Experience } from "types/portfolio";
import css from "./styles.module.css";

export default function Step(props: Experience): JSX.Element {
  return (
    <div className={css.wrapper}>
      <div className={css.icon}>
        <props.icon width={20} />
      </div>
      <div>
        {props.url ? (
          <ExternalLink
            type="external"
            title={
              <>
                {props.title}{" "}
                {props.position && (
                  <>
                    - <span>{props.position}</span>
                  </>
                )}
              </>
            }
            href={props.url}
          />
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

        <time className={css.date}>{props.range}</time>
        <div className={css.description}>{props.caption}</div>
      </div>
    </div>
  );
}
