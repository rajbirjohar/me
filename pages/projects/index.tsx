import Page from "@/templates/Page";
import ListProjects from "core/organisms/Projects";
import Head from "next/head";
import css from "./styles.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
        <meta
          content="All my open source projects hosted on Github"
          name="description"
        />
      </Head>
      <Page>
        <article className={css.wrapper}>
          <header>
            <h1>Projects</h1>
            <p>Open source for the world to see.</p>
          </header>
          <ListProjects all />
        </article>
      </Page>
    </>
  );
}
