import Container from "@/templates/Container";
import ListProjects from "core/organisms/Projects";
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
      <Container
        heading={
          <header>
            <h1>Projects</h1>
            <p>Open source for the world to see.</p>
          </header>
        }
      >
        <section>
          <ListProjects all />
        </section>
      </Container>
    </>
  );
}
