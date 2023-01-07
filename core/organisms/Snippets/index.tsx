import { Snippet } from "contentlayer/generated";
import css from "./styles.module.css";
import SnippetCard from "core/molecules/SnippetCard";

export default function Snippets(props: { snippets: Snippet[] }) {
  if (props.snippets.length === 0) {
    return (
      <p>
        <em>
          Woah. It looks like you tried to find something that doesn&#39;t exist
          yet. If you would like me to write down my thoughts on your question,
          let me know.
        </em>
      </p>
    );
  }
  return (
    <div className={css.grid}>
      {props.snippets.map((snippet) => (
        <SnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  );
}
