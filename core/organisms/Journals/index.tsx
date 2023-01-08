import { Journal } from "contentlayer/generated";
import JournalCard from "@/molecules/JournalCard";
import useSWR from "swr";
import css from "./styles.module.css";
import fetcher from "@/lib/fetcher";
import { TrackedJournal } from "types/alpine";
import TrendingJournals from "@/molecules/TrendingJournals";
import { useState } from "react";
import Search from "@/molecules/Search";

export default function Journals(props: {
  query?: string | string[] | null;
  all?: boolean;
  journals: Journal[];
}) {
  // Instead of fetching the views for each journal within the card component,
  // I call it in the parent so I won't have to make numerous calls as the number
  // of posts grow. I instead match it against the slug url and display accordingly.
  const { data } = useSWR<{
    data: { slug: string; views: number; likes: number }[];
  }>(`/api/views`, fetcher);

  const [search, setSearch] = useState("");

  let combinedJournals: TrackedJournal[] = props.journals.map((journal) => ({
    ...journal,
    views: data?.data.find(
      (views: { slug: string; views: number }) => views.slug === journal.slug
    )?.views,
    likes: data?.data.find(
      (views: { slug: string; views: number }) => views.slug === journal.slug
    )?.likes,
  }));

  const filteredJournals: Journal[] = combinedJournals
    .filter(
      ({ tags }) =>
        !props.query ||
        tags.join(" ").includes(props.query.toString().toLocaleLowerCase())
    )
    .filter(({ title, description, tags }) => {
      const searchString: string = `${title.toLowerCase()} ${description.toLowerCase()} ${tags.join(
        " "
      )}`;
      return searchString.includes(search.toLowerCase());
    });

  if (props.all) {
    return (
      <>
        <Search value={search} setValue={setSearch} />
        <div className={css.wrapper}>
          <div className={css.grid}>
            {filteredJournals.length === 0 && (
              <p>
                <em>
                  Woah. It looks like you tried to find something that
                  doesn&#39;t exist yet. If you would like me to write down my
                  thoughts on your question, let me know.
                </em>
              </p>
            )}
            {filteredJournals.map((journal: Journal) => (
              <JournalCard key={journal.title} journal={journal} />
            ))}
          </div>
          <TrendingJournals journals={combinedJournals} />
        </div>
      </>
    );
  }

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {props.journals.length === 0 && (
          <p>
            <em>
              Woah. It looks like you tried to find something that doesn&#39;t
              exist yet. If you would like me to write down my thoughts on your
              question, let me know.
            </em>
          </p>
        )}
        {combinedJournals.slice(0, 3).map((journal: Journal) => (
          <JournalCard key={journal.title} journal={journal} />
        ))}
      </div>
      <TrendingJournals journals={combinedJournals} />
    </div>
  );
}
