import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";
import css from "./experiences.module.css";

const Experiences: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Experiences</title>
      </Head>
      <h1 className={css.heading}>Experiences</h1>
      <p>
        <em>Working on it.</em>
      </p>
    </Page>
  );
};

export default Experiences;
