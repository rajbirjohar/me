import { Snippet } from "contentlayer/generated";
import Link from "next/link";
import css from "./styles.module.css";

export default function SnippetCard(props: { snippet: Snippet }) {
  return (
    <Link href={`/snippets/${props.snippet.slug}`} className={css.card}>
      <article className={css.article}>
        <header>
          <div className={css.heading}>
            <div className={css.badge}>{props.snippet.category}</div>
          </div>
          <h3 className={css.title}>{props.snippet.title}</h3>
        </header>
      </article>
    </Link>
  );
}
