import { IconArrowRight, IconArrowUpRight } from "@tabler/icons";
import Link from "next/link";
import css from "./ExternalLink.module.css";

export default function ExternalLink(props: {
  title: string;
  href: string;
  type: "local" | "external";
}) {
  if (props.type === "external") {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
        className={css.external}
      >
        {props.title}
        <IconArrowUpRight width={18} />
      </a>
    );
  }
  return (
    <Link href={props.href} passHref>
      <a className={css.local}>
        Discover <IconArrowRight width={18} />
      </a>
    </Link>
  );
}
