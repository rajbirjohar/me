import type { NextPage } from "next";
import Head from "next/head";
import { ListExperiences, Page, Heading, ListProjects } from "../components";
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
      <div className={css.wrapper}>
        <section className={css.section}>
          <Heading title={"Rajbir Johar"} subtitle={"Creative"} />
          <p>
            <em>Glad to have you.</em> Frontend Developer based in Southern
            California. Building and typing on bespoke keyboards. Getting lost
            on canyon drives during my downtime. Crafting aesthetic interfaces
            at Inventives for <em>mind blowing ideas.</em>
          </p>
        </section>
        <section className={css.section}>
          <Heading title="Now" />
          <ListExperiences />
          <Link href={`/experiences`} passHref>
            <a className={css.action}>
              Learn More <IconArrowRight width={18} />
            </a>
          </Link>
        </section>
        <section className={css.section}>
          <Heading title={"Work"} />
          <ListProjects />
          <Link href={`/projects`} passHref>
            <a className={css.action}>
              Learn More <IconArrowRight width={18} />
            </a>
          </Link>
        </section>
        <section className={css.section}>
          <Heading title={"Elsewhere"} />
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
      </div>
    </Page>
  );
};

export default Home;
