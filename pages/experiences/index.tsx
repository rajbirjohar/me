import ListExperiences from "@/components/Experiences";
import Head from "next/head";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Experiences</title>
        <meta content="Experiences that I've had both in and outside of my career." name="description" />
      </Head>
      <header>
        <h1>Experiences</h1>
        <ListExperiences all />
      </header>
    </>
  );
}
