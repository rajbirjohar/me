import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "./Page.module.css";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  const router = useRouter();
  return (
    <main className={css.wrapper}>
      {router.pathname !== "/" && (
        <Link href={`/`} passHref>
          <a className={css.action}>
            <IconArrowBarToLeft width={18} />
            Back to index
          </a>
        </Link>
      )}
      {props.children}
    </main>
  );
}
