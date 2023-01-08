import { Journal } from "contentlayer/generated";
import JournalCard from "@/molecules/JournalCard";
import useSWR from "swr";
import css from "./styles.module.css";
import fetcher from "@/lib/fetcher";

export default function Journals(props: { journals: Journal[] }) {
  // Instead of fetching the views for each journal within the card component,
  // I call it in the parent so I won't have to make numerous calls as the number
  // of posts grow. I instead match it against the slug url and display accordingly.
  const { data } = useSWR<{
    data: { slug: string; views: number; likes: number }[];
  }>(`/api/views`, fetcher);

  if (props.journals.length === 0) {
    return (
      <p>
        <em>
          Woah. It looks like you tried to find something that doesn&#39;t exist
          yet. If you would like me to write down my thoughts on your question,
          let me know.
        </em>
      </p>
    );
  }
  return (
    <div className={css.grid}>
      {props.journals.map((journal: Journal) => (
        <JournalCard
          key={journal.title}
          journal={journal}
          views={
            data?.data.find(
              (views: { slug: string; views: number }) =>
                views.slug === journal.slug
            )?.views
          }
          likes={
            data?.data.find(
              (views: { slug: string; views: number }) =>
                views.slug === journal.slug
            )?.likes
          }
        />
      ))}
    </div>
  );
}
