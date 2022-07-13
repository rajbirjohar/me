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
            title="Work"
            subtitle="All my work not protected under an NDA"
          />
          <ListProjects />
          <ExternalLink title={"Learn More"} href={`/projects`} type="local" />
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
      </div>
    </Page>
  );
};

export default Home;
