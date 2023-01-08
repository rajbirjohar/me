import Snippets from "core/organisms/Snippets";
import { pick } from "contentlayer/client";
import { Snippet, allSnippets } from "contentlayer/generated";
import Head from "next/head";
import Container from "@/templates/Container";

export default function SnippetsPage(props: { snippets: Snippet[] }) {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Snippets</title>
      </Head>
      <Container
        heading={
          <header>
            <h1>Snippets</h1>
            <p>
              Short pieces of code or components that I&#39;ve acquired over the
              years and use often.
            </p>
          </header>
        }
      >
        <section>
          <Snippets snippets={props.snippets} />
        </section>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const snippets = allSnippets
    .filter((snippet) => snippet.draft === false)
    .map((snippet) =>
      pick(snippet, ["category", "title", "description", "language", "slug"])
    );
  return { props: { snippets } };
}
