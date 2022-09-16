import Heading from "@/components/Heading";
import NowPlaying from "@/components/Music/NowPlaying";
import RecentlyPlayed from "@/components/Music/RecentlyPlayed";
import TopArtists from "@/components/Music/TopArtists";
import Page from "@/components/Page";
import { NextPage } from "next";
import Head from "next/head";
import css from "./music.module.css";

const Music: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Music</title>
      </Head>
      <Heading
        title={"Music"}
        subtitle="Color you can hear. A good playlist is the difference between living life and enjoying life"
      />
      <NowPlaying />
      <TopArtists />
      <RecentlyPlayed />
    </Page>
  );
};

export default Music;
