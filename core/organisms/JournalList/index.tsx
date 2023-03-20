import { Journal } from "@/.contentlayer/generated";
import JournalCard from "@/core/molecules/JournalCard";
import css from "./styles.module.css";
import { Variants, motion } from "framer-motion";

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

  return (
    <motion.div
      variants={list}
      initial="initial"
      animate="animate"
      exit="exit"
      className={css.list}
    >
      {props.journals.map((journal) => (
        <JournalCard key={journal.title} journal={journal} />
      ))}
    </motion.div>
  );
}
