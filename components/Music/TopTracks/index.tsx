import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import Track from "@/components/Music/Track";
import css from "../Track/styles.module.css";
import { motion, Variants } from "framer-motion";

const tracks: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
    },
  },
};

export default function TopTracks() {
  const { error, data } = useSWR("/api/spotify/toptracks", fetcher);
  if (error) {
    return (
      <>
        <em>How unfortunate. Spotify broke.</em>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <em>Loading...</em>
      </>
    );
  } else {
    return (
      <motion.ul
        className={css.recentlyPlayed}
        variants={tracks}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {data.tracks.map((track: any, index: any) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </motion.ul>
    );
  }
}
