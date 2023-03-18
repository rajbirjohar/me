import css from "./styles.module.css";

export default function Page(props: { children: React.ReactNode }) {
  return <article className={css.article}>{props.children}</article>;
}
