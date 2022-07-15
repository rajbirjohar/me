import css from "./styles.module.css";

export default function Heading(props: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <div className={css.heading}>
      <h1 className={css.title}>{props.title}</h1>
      <h2 className={css.subtitle}>{props.subtitle}</h2>
    </div>
  );
}
