import Head from "next/head";
import { Snippet, allSnippets } from "contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import css from "./styles.module.css";
import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import MDXComponents from "core/molecules/Components";
import Container from "@/templates/Container";

const PostLayout = ({ snippet }: { snippet: Snippet }) => {
  const MDXContent = useMDXComponent(snippet.body.code);

  return (
    <>
      <Head>
        <title>{`Rajbir Johar | ${snippet.title}`}</title>
        <meta content={snippet.description} name="description" />
        <meta property="article:published_time" content={snippet.date} />
      </Head>
      <Container
        heading={
          <header>
            <Link href={"/snippets"} className={css.link}>
              <>
                <IconArrowBarToLeft /> Index
              </>
            </Link>
            <p className={css.badge}>{snippet.category}</p>
            <h1>{snippet.title}</h1>
          </header>
        }
      >
        <section className={css.snippet}>
          <div className={css.content}>
            <MDXContent components={MDXComponents} />
          </div>
          <footer className={css.footer}>
            <em>Found something wrong?</em>
            <p>
              Let me know on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/rajbirjohar"}
              >
                Github
              </a>
              .
            </p>
          </footer>
        </section>
      </Container>
    </>
  );
};

export default PostLayout;

export async function getStaticProps(params: Params) {
  const snippet: Snippet | undefined = allSnippets.find((snippet: Snippet) => {
    return snippet.slug === params.params.slug;
  });

  return {
    props: {
      snippet: snippet,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allSnippets
      .filter((snippet) => snippet.draft === false)
      .map((snippet) => ({ params: { slug: snippet.slug } })),
    fallback: false,
  };
}
