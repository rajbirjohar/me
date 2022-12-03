import css from "./styles.module.css";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <main className={css.wrapper}>
      <article className={css.page}>
        <>{props.children}</>
      </article>
    </main>
  );
}
