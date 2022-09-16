import Heading from "@/components/Heading";
import ListExperiences from "@/components/Experiences";
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
      <section>
        <Heading title={"Experiences"} />
        <ListExperiences all />
      </section>
    </Page>
  );
};

export default Experiences;
