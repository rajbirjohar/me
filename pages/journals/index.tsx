import Head from "next/head";
import { compareDesc } from "date-fns";
import css from "./styles.module.css";
import { Journal, allJournals } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IconArrowBarToLeft } from "@tabler/icons";
import Journals from "core/organisms/Journals";
import Tags from "@/molecules/Tags";
import Container from "@/templates/Container";

const History = (props: { queries: string[] }) => {
  if (props.queries.length === 0) {
    return <></>;
  }
  return (
    <div className={css.history}>
      <h3>Revisit</h3>
      <Tags tags={props.queries} />
    </div>
  );
};

export default function JournalsPage(props: { journals: Journal[] }) {
  const router = useRouter();
  const query = router.query.tag ?? null;

  const [previousQueries, setPreviousQueries] = useState<Set<string>>(
    new Set()
  );

  const storeRecentQueries = useCallback(() => {
    const recentQueries = new Set<string>(
      JSON.parse(localStorage.getItem("previousQueries") || "[]")
    );
    setPreviousQueries(recentQueries);
    if (query) {
      recentQueries.add(query as string);
    }
    window.localStorage.setItem(
      "previousQueries",
      JSON.stringify(Array.from(recentQueries))
    );
  }, [query]);

  useEffect(() => {
    storeRecentQueries();
  }, [storeRecentQueries]);

  return (
    <>
      <Head>
        <title>Rajbir Johar | Journals</title>
        <meta
          content="My thoughts on different topics relating to mainly developer experiences"
          name="description"
        />
      </Head>
      <Container
        className={css.journals}
        heading={
          <header>
            {query && (
              <Link href={"/journals"} className={css.link}>
                <>
                  <IconArrowBarToLeft /> Index
                </>
              </Link>
            )}
            <h1>
              Journals{" "}
              {query && <span className={css.filtertag}>on {query}</span>}
            </h1>
            <p>Here is where I type at the speed of thought.</p>
          </header>
        }
      >
        <History queries={Array.from(previousQueries)} />
        <Journals journals={props.journals} query={query} all />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const journals = allJournals
    // Select only the fields needed to fill out the
    // cards for the journals
    .filter((journal) => journal.draft === false)
    .map((journal) =>
      pick(journal, [
        "category",
        "title",
        "author",
        "description",
        "tags",
        "date",
        "slug",
      ])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return { props: { journals } };
}
