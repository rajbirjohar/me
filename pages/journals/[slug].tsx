import Head from "next/head";
import { format, parseISO } from "date-fns";
import { Journal, allJournals } from "contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import css from "./styles.module.css";
import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import Views from "core/molecules/Views";
import Signature from "core/atoms/Signature";
import LikeButton from "../../core/molecules/LikeButton/index";
import Divider from "core/atoms/Divider";
import MDXComponents from "core/molecules/Components";

const PostLayout = ({ journal }: { journal: Journal }) => {
  const MDXContent = useMDXComponent(journal.body.code);

  return (
    <>
      <Head>
        <title>{`Rajbir Johar | ${journal.title}`}</title>
        <meta content={journal.description} name="description" />
        <meta property="article:published_time" content={journal.date} />
        <meta name="keywords" content={journal.tags.toString()} />
        <meta name="author" content={journal.author} />
      </Head>
      <Link href={"/journals"} className={css.link}>
        <>
          <IconArrowBarToLeft /> Index
        </>
      </Link>
      <article className={css.journal}>
        <header>
          <p className={css.badge}>{journal.category}</p>
          <h1>{journal.title}</h1>
          <p className={css.author}>
            {journal.author}
            <Divider />
            <time dateTime={journal.date} suppressHydrationWarning>
              {format(parseISO(journal.date), "LLLL d, yyyy")}
            </time>
            <Divider />
            <Views slug={journal.slug} />
          </p>
        </header>
        <hr />
        <div className={css.content}>
          <MDXContent components={MDXComponents} />
        </div>
        <div className={css.sticky}>
          <LikeButton slug={journal.slug} />
        </div>
        <hr />
        <footer>
          <div className={css.signature}>
            <Signature />
            <cite>— {journal.author}</cite>
          </div>
          <h4>Related</h4>
          <div className={css.tags}>
            {journal.tags.map((tag: string) => (
              <Link
                key={tag}
                className={css.tag}
                href={{
                  pathname: "/journals",
                  query: { tag: tag },
                }}
                passHref
                shallow
                replace
              >
                #{tag}&nbsp;
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
};

export default PostLayout;

export async function getStaticProps(params: Params) {
  const journal: Journal | undefined = allJournals.find((journal: Journal) => {
    return journal.slug === params.params.slug;
  });

  return {
    props: {
      journal: journal,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allJournals
      .filter((journal) => journal.draft === false)
      .map((journal) => ({ params: { slug: journal.slug } })),
    fallback: false,
  };
}
