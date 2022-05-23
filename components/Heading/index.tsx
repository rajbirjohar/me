import css from "./Heading.module.css";

export default function Heading(props: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <div className={css.heading}>
      <h1>{props.title}</h1>
      <h2 className={css.subtitle}>{props.subtitle}</h2>
    </div>
  );
}
