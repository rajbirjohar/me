import { Journal } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import css from "./styles.module.css";
import { Variants, motion } from "framer-motion";
import { format } from "date-fns";

const MotionLink = motion(Link);

export default function JournalCard(props: { journal: Journal }) {
  const card: Variants = {
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
    <MotionLink href={`/journals/${props.journal.slug}`} variants={card}>
      <div className={css.journalcard}>
        <div className={css.thumbnail}>
          {props.journal.image && (
            <Image
              src={props.journal.image}
              className={css.image}
              alt={`${props.journal.title} journal image`}
              fill
            />
          )}
        </div>
        <div className={css.content}>
          <h3 className="clamp">{props.journal.title}</h3>
          <p className="clamp-3">{props.journal.description}</p>
          <time className={css.date}>
            {format(new Date(props.journal.date), "M.dd.yyyy")}
          </time>
        </div>
      </div>
    </MotionLink>
  );
}
