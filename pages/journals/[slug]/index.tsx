import { Journal as JournalType, allJournals } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Prose from "@/core/atoms/Prose";
import Head from "next/head";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import MDXComponents from "@/core/molecules/JournalComponents";
import css from "./styles.module.css";
import { format } from "date-fns";

export default function Journal(props: { journal: JournalType }) {
  const MDXContent = useMDXComponent(props.journal.body.code);

  return (
    <>
      <Head>
        <title>{`Rajbir Johar | ${props.journal.title}`}</title>
        <meta
          content={props.journal.description}
          name="description"
          key="description"
        />
        <meta property="article:published_time" content={props.journal.date} />
        <meta name="keywords" content={props.journal.tags.toString()} />
        <meta name="author" content={props.journal.author} />
        <meta
          property="og:image"
          content={`https://rajbir.io/api/og?title=${props.journal.title}`}
          key="image"
        />

        <meta
          name="twitter:title"
          content={`Rajbir Johar | ${props.journal.title}`}
        />
        <meta name="twitter:description" content={props.journal.description} />
        <meta
          name="twitter:image"
          content={`https://rajbir.io/api/og?title=${props.journal.title}`}
        />
      </Head>
      <Prose>
        <header className={css.header}>
          {props.journal.image && (
            <div className={css.hero}>
              <Image
                src={props.journal.image}
                alt={`${props.journal.title} journal image`}
                className={css.image}
                fill
                priority
              />
            </div>
          )}
          <h1>{props.journal.title}</h1>
          <div className={css.author}>
            <span>{props.journal.author}</span>
            <time>{format(new Date(props.journal.date), "M.dd.yyyy")}</time>
          </div>
          <p>{props.journal.description}</p>
          <hr />
        </header>
        <section>
          <MDXContent components={MDXComponents} />
        </section>
      </Prose>
    </>
  );
}

export async function getStaticProps(params: Params) {
  const journal: JournalType | undefined = allJournals.find(
    (journal: JournalType) => {
      return journal.slug === params.params.slug;
    }
  );

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
