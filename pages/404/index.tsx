import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir | Lost</title>
      </Head>
      <section>
      <h1>The Ocean is Vast</h1>
        <p>
          You are bound to get lost. I&#39;m not sure how you got here or where
          you&#39;re going. Reach out to me if you can&#39;t find your way back.
        </p>
      </section>
    </Page>
  );
};

export default Custom404;
