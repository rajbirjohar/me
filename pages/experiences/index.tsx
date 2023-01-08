import Container from "@/templates/Container";
import ListExperiences from "core/organisms/Experiences";
import Head from "next/head";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Experiences</title>
        <meta
          content="Experiences that I've had both in and outside of my career."
          name="description"
        />
      </Head>
      <Container
        heading={
          <header>
            <h1>Experiences</h1>
          </header>
        }
      >
        <section>
          <ListExperiences all />
        </section>
      </Container>
    </>
  );
}
