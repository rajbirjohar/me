import Heading from "@/components/Heading";
import ListProjects from "@/components/Projects";
import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";
import css from "./projects.module.css";

const Projects: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir | Projects</title>
      </Head>
      <section>
        <Heading
          title={"Projects"}
          subtitle={"Open source for the world to see"}
        />
        <ListProjects />
      </section>
    </Page>
  );
};

export default Projects;
