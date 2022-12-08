import ListProjects from "@/components/Projects";
import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir | Projects</title>
      </Head>
      <section>
        <h1>Projects</h1>
        <p>Open source.</p>
        <ListProjects />
      </section>
    </Page>
  );
};

export default Projects;
