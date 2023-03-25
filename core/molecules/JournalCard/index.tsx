import Link from "next/link";
import css from "./styles.module.css";
import { Variants, motion } from "framer-motion";
import { format } from "date-fns";
import { TrackedJournal } from "@/core/organisms/JournalList";

export default function JournalCard(props: { journal: TrackedJournal }) {
  const item: Variants = {
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <motion.div className={css.journal} variants={item}>
      <div className={css.heading}>
        <Link href={`/journals/${props.journal.slug}`} className="clamp">
          {props.journal.title}
        </Link>
        <span>{props.journal.views ?? <>—</>} views</span>
      </div>
      <time className={css.date}>
        {format(new Date(props.journal.date), "M.dd.yyyy")}
      </time>
    </motion.div>
  );
}
