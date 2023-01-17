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
import LikeButton from "core/molecules/LikeButton/index";
import Divider from "core/atoms/Divider";
import MDXComponents from "core/molecules/Components";
import Tags from "@/molecules/Tags";
import Page from "@/templates/Page";
import { useActiveId } from "@/hooks/useActiveId";

const PostLayout = ({ journal }: { journal: Journal }) => {
  const MDXContent = useMDXComponent(journal.body.code);
  const activeId = useActiveId(journal.headings);

  return (
    <>
      <Head>
        <title>{`Rajbir Johar | ${journal.title}`}</title>
        <meta content={journal.description} name="description" />
        <meta property="article:published_time" content={journal.date} />
        <meta name="keywords" content={journal.tags.toString()} />
        <meta name="author" content={journal.author} />
        <meta
          property="og:image"
          content={`https://rajbir.io/api/og?title=${journal.title}`}
        />
      </Head>
      <Page>
        <article className={css.wrapper}>
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
            <div className={css.text} id="journal">
              <MDXContent components={MDXComponents} />
            </div>
            {journal.toc && (
              <aside className={css.tocwrapper}>
                <h3>Table of Contents</h3>
                <div className={css.toc}>
                  {journal.headings.map(
                    (heading: {
                      level: string;
                      text: string;
                      slug: string;
                    }) => {
                      return (
                        <div key={`#${heading.slug}`} className={css.tocanchor}>
                          <a
                            data-level={heading.level}
                            href={`#${heading.slug}`}
                            className={
                              activeId === heading.slug ? css.active : ""
                            }
                          >
                            {heading.text}
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              </aside>
            )}
          </div>
          <div className={css.sticky}>
            <LikeButton slug={journal.slug} />
          </div>
          <footer className={css.footer}>
            <div className={css.signature}>
              <p>Yours Truly,</p>
              <Signature />
              <cite>— {journal.author}</cite>
            </div>
            <h4>Related</h4>
            <Tags tags={journal.tags} />
          </footer>
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
