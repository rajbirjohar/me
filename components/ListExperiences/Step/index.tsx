import { Experience } from "types/portfolio";
import css from "./Step.module.css";

export default function Step(props: Experience): JSX.Element {
  return (
    <li className={css.wrapper}>
      <div className={css.icon}>
        <props.icon width={20} />
      </div>
      <div>
        <h2 className={css.title}>
          {props.title} - <span>{props.position}</span>
        </h2>
        <time className={css.date}>
          {props.startDate} - {props.endDate}
        </time>
        <p className={css.caption}>{props.caption}</p>
      </div>
    </li>
  );
}
