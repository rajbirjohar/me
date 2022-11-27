import Image from "next/image";
import css from "./styles.module.css";
import { Track as TrackType } from "types/portfolio";
import { motion, Variants } from "framer-motion";

const track: Variants = {
  hidden: {
    opacity: 0,
    y: 5,
    transition: {
      staggerChildren: 0.15,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Track(props: TrackType) {
  return (
    <motion.div className={css.wrapper} variants={track}>
      <div className={css.track}>
        <div className={css.albumArt}>
          <Image
            src={props.albumArt}
            alt="Album Art"
            className={css.rounded}
            width={75}
            height={75}
            layout="fixed"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className={css.info}>
          {/* {props.progress && (
            <div
              className={css.progress + " " + css.secondary}
              style={{
                width: `${(props.progress / props.duration ?? 0) * 100}%`,
              }}
            />
          )} */}
          <div className={`${css.heading} clamp`}>
            <a
              className={`${css.title} clamp`}
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.title}{" "}
              {props.explicit && <span className={css.explicit}>E</span>}
            </a>
          </div>
          <p className={`${css.artist} clamp`}>{props.artist}</p>
        </div>
      </div>
    </motion.div>
  );
}
