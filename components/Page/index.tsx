import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import css from "./styles.module.css";
import ExternalLink from "@/components/ExternalLink";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  const router = useRouter();
  return (
    <main className={css.wrapper}>
      <section
        className={
          router.pathname !== "/"
            ? `${css.hidden} ${css.intro}`
            : `${css.intro}`
        }
      >
        <Heading
          title={"Rajbir Johar"}
          subtitle={"FE Developer at Inventives"}
        />
        <p>
          <em>Glad to have you.</em> Frontend Developer based in{" "}
          <s>Southern California</s> Arizona. Building and typing on bespoke
          keyboards. Getting lost on canyon drives during my downtime. Crafting
          aesthetic interfaces at Inventives for <em>mind blowing ideas.</em>
        </p>
        <Heading title={"Elsewhere"} subtitle="Let's go for a walk" />
        <div className={css.actions}>
          <ExternalLink
            title="Github"
            href="https://github.com/rajbirjohar"
            type="external"
          />
          <ExternalLink
            title="LinkedIn"
            href="https://www.linkedin.com/in/rajbirjohar/"
            type="external"
          />
          <ExternalLink
            title="Instagram"
            href="https://www.instagram.com/rajbir.johar/"
            type="external"
          />
        </div>
      </section>
      <section className={css.section}>
        {router.pathname !== "/" && (
          <Link href={`/`} passHref>
            <a className={css.action}>
              <IconArrowBarToLeft width={18} />
              Back to index
            </a>
          </Link>
        )}
        {props.children}
      </section>
    </main>
  );
}
