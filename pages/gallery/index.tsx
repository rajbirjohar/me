import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";

const Gallery: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Gallery</title>
      </Head>
      <section>
        <Heading
          title={"Gallery"}
          subtitle="A glimpse of how I see the world."
        />
      </section>
    </Page>
  );
};

export default Gallery;
