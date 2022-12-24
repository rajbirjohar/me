import ListExperiences from "@/components/Experiences";
import Head from "next/head";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | About</title>
      </Head>
      <header>
        <h1>Experiences</h1>
        <ListExperiences all />
      </header>
    </>
  );
}
