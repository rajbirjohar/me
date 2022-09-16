import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import css from "./styles.module.css";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  const router = useRouter();
  return (
    <main className={css.wrapper}>
      <article className={css.page}>
        {router.pathname !== "/" ? (
          <Link href={`/`} passHref>
            <a className={css.action}>
              <IconArrowBarToLeft width={18} />
              Back to index
            </a>
          </Link>
        ) : (
          <section className={css.intro}>
            <Heading
              title={"Rajbir Johar"}
              subtitle={"Pushing the waves you surf on the web"}
            />
            <p>
              <em>Glad to have you.</em> Frontend and UX Engineer based in{" "}
              <s>Southern California</s> Arizona. Building and typing on bespoke
              keyboards. Getting lost on canyon drives during my downtime.
              Crafting aesthetic interfaces at Inventives for{" "}
              <em>mind blowing ideas.</em>
            </p>
            <p>
              This space is ever changing, just like we are as humans. Tomorrow
              might not look like today so enjoy today while you can.
            </p>
          </section>
        )}
        <>{props.children}</>
      </article>
    </main>
  );
}
