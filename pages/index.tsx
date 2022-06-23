import type { NextPage } from "next";
import Head from "next/head";
import css from "@/styles/Index.module.css";
import Heading from "@/components/Heading";
import ListExperiences from "@/components/ListExperiences";
import ListProjects from "@/components/ListProjects";
import Page from "@/components/Page";
import ExternalLink from "@/components/ExternalLink";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <div className={css.wrapper}>
        <section className={css.section}>
          <Heading
            title={"Rajbir Johar"}
            subtitle={"Frontend Developer at Inventives"}
          />
          <p>
            <em>Glad to have you.</em> Frontend Developer based in{" "}
            <s>Southern California</s> Arizona. Building and typing on bespoke
            keyboards. Getting lost on canyon drives during my downtime.
            Crafting aesthetic interfaces at Inventives for{" "}
            <em>mind blowing ideas.</em>
          </p>
        </section>
        <section className={css.section}>
          <Heading title="Now" subtitle="What I've been up to recently" />
          <ListExperiences />
          <ExternalLink
            title={"Learn More"}
            href={`/experiences`}
            type="local"
          />
        </section>
        <section className={css.section}>
          <Heading
            title="Work"
            subtitle="All my work not protected under an NDA"
          />
          <ListProjects />
          <ExternalLink title={"Learn More"} href={`/projects`} type="local" />
        </section>
        <section className={css.section}>
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
      </div>
    </Page>
  );
};

export default Home;
