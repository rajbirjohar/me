import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";

const Custom500: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir | Lost</title>
      </Head>
      <section>
       <h1>The Void is Even Vaster</h1>
        <p>
          It seems the horizon has fused the sky and the ocean. All you see are
          stars. Reach out to me if you can&#39;t find your way back.
        </p>
      </section>
    </Page>
  );
};

export default Custom500;
