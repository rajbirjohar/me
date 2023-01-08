import Link from "next/link";
import css from "./styles.module.css";

export default function Tags(props: { tags: string[] }) {
  return (
    <div className={css.tags}>
      {props.tags.map((tag: string) => (
        <Link
          key={tag}
          className={css.tag}
          href={{
            pathname: "/journals",
            query: { tag: tag },
          }}
          passHref
          shallow
          replace
        >
          #{tag}&nbsp;
        </Link>
      ))}
    </div>
  );
}
