import ListExperiences from "@/components/Experiences";
import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";

const Experiences: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Experiences</title>
      </Head>
      <section>
        <h1>Experiences</h1>
        <ListExperiences all />
      </section>
    </Page>
  );
};

export default Experiences;
