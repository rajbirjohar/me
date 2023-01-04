import Head from "next/head";
import { Snippet, allSnippets } from "contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import css from "./styles.module.css";
import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import MDXComponents from "@/molecules/Components";

const PostLayout = ({ snippet }: { snippet: Snippet }) => {
  const MDXContent = useMDXComponent(snippet.body.code);

  return (
    <>
      <Head>
        <title>{`Rajbir Johar | ${snippet.title}`}</title>
        <meta content={snippet.description} name="description" />
        <meta property="article:published_time" content={snippet.date} />
      </Head>
      <Link href={"/chapters"} className={css.link}>
        <>
          <IconArrowBarToLeft /> Index
        </>
      </Link>
      <article className={css.chapter}>
        <header>
          <p className={css.badge}>{snippet.category}</p>
          <h1>{snippet.title}</h1>
        </header>
        <hr />
        <div className={css.content}>
          <MDXContent components={MDXComponents} />
        </div>
      </article>
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
