import NowPlaying from "@/components/Music/NowPlaying";
import RecentlyPlayed from "@/components/Music/RecentlyPlayed";
import TopArtists from "@/components/Music/TopArtists";
import TopTracks from "@/components/Music/TopTracks";
import Page from "@/components/Page";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import css from "./styles.module.css";

const Music: NextPage = () => {
  const [tracks, setTracks] = useState<"recent" | "top">("recent");

  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Music</title>
      </Head>
      <section>
        <h1>Music</h1>
        <NowPlaying />
        <TopArtists />
        <div className={css.actions}>
          <h2
            className={
              tracks === "recent"
                ? `${css.title} ${css.selected}`
                : `${css.title}`
            }
            role="button"
            onClick={() => setTracks("recent")}
          >
            Recents
          </h2>
          <h2
            className={
              tracks === "top" ? `${css.title} ${css.selected}` : `${css.title}`
            }
            role="button"
            onClick={() => setTracks("top")}
          >
            On Repeat
          </h2>
        </div>
        <AnimatePresence exitBeforeEnter>
          {tracks === "recent" ? <RecentlyPlayed /> : <TopTracks />}
        </AnimatePresence>
      </section>
    </Page>
  );
};

export default Music;
