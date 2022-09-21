import {
  IconArrowBarToLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons";
import Link from "next/link";
import css from "./styles.module.css";

export default function ExternalLink(props: {
  title: React.ReactNode;
  href: string;
  type: "local" | "external" | "back";
}) {
  return (
    <Link href={props.href} target="_blank" rel="noreferrer noopener" passHref>
      <a
        className={
          props.type === "external"
            ? `${css.external}`
            : props.type === "local"
            ? `${css.local}`
            : `${css.external}`
        }
      >
        {props.type === "back" && (
          <IconArrowBarToLeft width={18} strokeWidth={2.5} />
        )}
        {props.title ? props.title : <>Discover</>}{" "}
        {props.type === "external" && (
          <IconArrowUpRight width={18} strokeWidth={2.5} />
        )}
        {props.type === "local" && (
          <IconArrowRight width={18} strokeWidth={2.5} />
        )}
      </a>
    </Link>
  );
}
