import { Journal } from "@/.contentlayer/generated";
import JournalCard from "@/core/molecules/JournalCard";
import css from "./styles.module.css";
import { Variants, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

export interface TrackedJournal extends Journal {
  likes?: number;
  views?: number;
}

export default function JournalList(props: { journals: Journal[] }) {
  const list: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const fetchAllViews = async () => {
    const response = await fetch("/api/views");
    return response.json();
  };

  const analytics = useQuery<{ slug: string; likes: number; views: number }[]>({
    queryKey: ["views"],
    queryFn: fetchAllViews,
  });

  const trackedJournals: TrackedJournal[] = props.journals.map((journal) => ({
    ...journal,
    views: analytics.data?.find((analytic) => analytic.slug === journal.slug)
      ?.views,

    likes: analytics.data?.find((analytic) => analytic.slug === journal.slug)
      ?.likes,
  }));

  return (
    <motion.div
      variants={list}
      initial="initial"
      animate="animate"
      exit="exit"
      className={css.list}
    >
      {trackedJournals.map((journal) => (
        <JournalCard key={journal.title} journal={journal} />
      ))}
    </motion.div>
  );
}
