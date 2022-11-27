import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import css from "./styles.module.css";
import ExternalLink from "../ExternalLink";
import Image from "next/future/image";
import profilePic from "../../public/me.jpg";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  const router = useRouter();
  return (
    <main className={css.wrapper}>
      <article className={css.page}>
        {router.pathname !== "/" ? (
          <ExternalLink type="back" title="Back to index" href="/" />
        ) : (
          <section className={css.intro}>
            <Heading
              title={"Rajbir Johar"}
              subtitle={"🌲 Exploring."}
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
            <Image
              src={profilePic}
              alt="A picture of me standing in front of a forest with a cloudy sky. I'm wearing a beige shirt and I have round, black glasses."
              width="0"
              height="0"
              sizes="100vw"
              className={css.profile}
              quality={100}
              placeholder="blur"
            />
          </section>
        )}
        <>{props.children}</>
      </article>
    </main>
  );
}
