import Section from "@/atoms/Section";
import Snippets from "@/organisms/Snippets";
import { pick } from "contentlayer/client";
import { Snippet, allSnippets } from "contentlayer/generated";
import Head from "next/head";

export default function SnippetsPage(props: { snippets: Snippet[] }) {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Snippets</title>
      </Head>
      <header>
        <h1>Snippets</h1>
      </header>
      <Section>
        <p>
          Short pieces of code or components that I&#39;ve acquired over the
          years and use often.
        </p>
        <Snippets snippets={props.snippets} />
      </Section>
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
