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
import LikeButton from "../../../core/molecules/LikeButton/index";
import Divider from "core/atoms/Divider";
import MDXComponents from "core/molecules/Components";
import Tags from "@/molecules/Tags";
import Page from "@/templates/Page";

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
      <Page>
        <article className={css.wrapper}>
          <div className={css.content}>
            <header className={css.header}>
              <Link href={"/journals"} className={css.link}>
                <>
                  <IconArrowBarToLeft /> Index
                </>
              </Link>
              <p className={css.badge}>{journal.category}</p>
              <h1>{journal.title}</h1>
              <p className={css.details}>
                {journal.author}
                <Divider />
                <time dateTime={journal.date} suppressHydrationWarning>
                  {format(parseISO(journal.date), "LLLL d, yyyy")}
                </time>
                <Divider />
                <Views slug={journal.slug} />
              </p>
            </header>
            <div className={css.journal}>
              <MDXContent components={MDXComponents} />
            </div>
            <div className={css.sticky}>
              <LikeButton slug={journal.slug} />
            </div>
            <footer>
              <div className={css.signature}>
                <p>Yours Truly,</p>
                <Signature />
                <cite>— {journal.author}</cite>
              </div>
              <h4>Related</h4>
              <Tags tags={journal.tags} />
            </footer>
          </div>
        </article>
      </Page>
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
