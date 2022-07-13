import css from "./Heading.module.css";

export default function Heading(props: {
  title: string;
  subtitle?: string;
  large?: boolean;
}): JSX.Element {
  return (
    <div
      className={props.large ? `${css.heading} ${css.large}` : `${css.heading}`}
    >
      <h1>{props.title}</h1>
      <h2
        className={
          props.large ? `${css.subtitle} ${css.large}` : `${css.subtitle}`
        }
      >
        {props.subtitle}
      </h2>
    </div>
  );
}
