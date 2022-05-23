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
      <h1 className={css.heading}>Projects</h1>
      <p>
        <em>Working on it.</em>
      </p>
    </Page>
  );
};

export default Projects;
