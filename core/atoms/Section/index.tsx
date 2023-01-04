import css from "./styles.module.css";

export default function Section(props: { children: React.ReactNode }) {
  return <div className={css.section}>{props.children}</div>;
}
