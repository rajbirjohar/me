import Head from "next/head";
import { compareDesc } from "date-fns";
import css from "./styles.module.css";
import { Chapter, allChapters } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IconArrowBarToLeft, IconSearch } from "@tabler/icons";
import Chapters from "@/components/Chapters";

export default function ChaptersPage(props: { chapters: Chapter[] }) {
  const router = useRouter();
  const query = router.query.tag ?? null;
  const [search, setSearch] = useState("");
  const [previousQueries, setPreviousQueries] = useState<Set<string>>(
    new Set()
  );
  const filteredChapters: Chapter[] = props.chapters
    .filter(
      ({ tags }) =>
        query == null ||
        tags.join(" ").includes(query.toString().toLocaleLowerCase())
    )
    .filter(({ title, description, tags }) => {
      const searchString: string = `${title.toLowerCase()} ${description.toLowerCase()} ${tags.join(
        " "
      )}`;
      return searchString.includes(search.toLowerCase());
    });

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
        <title>Rajbir Johar | Chapters</title>
        <meta
          content="My thoughts on different topics relating to mainly developer experiences"
          name="description"
        />
      </Head>
      <header>
        {query && (
          <Link href={"/chapters"} className={css.link}>
            <>
              <IconArrowBarToLeft /> Index
            </>
          </Link>
        )}
        <h1>
          Chapters {query && <span className={css.filtertag}>on {query}</span>}
        </h1>
      </header>
      <div className={css.section}>
        <p>Here is where I type at the speed of thought.</p>
        <div className={css.searchwrapper}>
          <IconSearch />
          <input
            className={css.search}
            autoComplete="off"
            id="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={css.history}>
          <h3>Revisit</h3>
          {Array.from(previousQueries)
            .slice(0, 10)
            .map((query) => (
              <Link
                tabIndex={0}
                key={query}
                className={css.tag}
                href={{
                  pathname: "/chapters",
                  query: { tag: query },
                }}
                passHref
                shallow
                replace
              >
                #{query}&nbsp;&nbsp;
              </Link>
            ))}
        </div>
        <Chapters chapters={filteredChapters} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const chapters = allChapters
    // Select only the fields needed to fill out the
    // cards for the journals
    .filter((chapter) => chapter.draft === false)
    .map((chapter) =>
      pick(chapter, [
        "category",
        "title",
        "author",
        "description",
        "tags",
        "date",
        "url",
        "slug",
      ])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return { props: { chapters } };
}
