import ListProjects from "core/organisms/Projects";
import Section from "core/atoms/Section";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
        <meta
          content="All my open source projects hosted on Github"
          name="description"
        />
      </Head>
      <header>
        <h1>Projects</h1>
      </header>
      <Section>
        <p>Open source for the world to see.</p>
        <ListProjects all />
      </Section>
    </>
  );
}
