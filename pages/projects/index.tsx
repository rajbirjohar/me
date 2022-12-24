import ListProjects from "@/components/Projects";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <header>
        <h1>Projects</h1>
        <ListProjects all />
      </header>
    </>
  );
}
