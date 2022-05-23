import type { NextPage } from "next";
import Head from "next/head";
import { Experiences, Page } from "../components";
import css from "@/styles/Index.module.css";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons";

const ExternaltLink = (props: { title: string; href: string }) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      className={css.action}
    >
      {props.title} <IconArrowUpRight width={18} />
    </a>
  );
};

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <article className={css.wrapper}>
        <section className={css.section}>
          <div className={css.heading}>
            <h1>Rajbir Johar</h1>
            <span className={css.subtitle}>Creative</span>
          </div>
          <p>
            <em>Glad to have you.</em> Frontend Developer based in Southern
            California. Building and typing on bespoke keyboards. Getting lost
            on canyon drives during my downtime. Crafting aesthetic interfaces
            at Inventives for <em>mind blowing ideas.</em>
          </p>
        </section>
        <section className={css.section}>
          <h1 className={css.heading}>Now</h1>
          <Experiences />
          <Link href={`/experiences`} passHref>
            <a className={css.action}>
              Learn More <IconArrowRight width={18} />
            </a>
          </Link>
        </section>
        <section className={css.section}>
          <h1 className={css.heading}>Work</h1>
          <Link href={`/projects`} passHref>
            <a className={css.action}>
              Learn More <IconArrowRight width={18} />
            </a>
          </Link>
        </section>
        <section className={css.section}>
          <h1 className={css.heading}>Elsewhere</h1>
          <div className={css.actions}>
            <ExternaltLink
              title={"Github"}
              href={"https://github.com/rajbirjohar"}
            />
            <ExternaltLink
              title={"LinkedIn"}
              href={"https://www.linkedin.com/in/rajbirjohar/"}
            />
            <ExternaltLink
              title={"Instagram"}
              href={"https://www.instagram.com/rajbir.johar/"}
            />
          </div>
        </section>
      </article>
    </Page>
  );
};

export default Home;
