import type { NextPage } from "next";
import Head from "next/head";
import css from "@/styles/Index.module.css";
import Heading from "@/components/Heading";
import ListExperiences from "@/components/Experiences";
import ListProjects from "@/components/Projects";
import Page from "@/components/Page";
import ExternalLink from "@/components/ExternalLink";
import NowPlaying from "@/components/Music/NowPlaying";
import TopArtists from "@/components/Music/TopArtists";
import RecentlyPlayed from "@/components/Music/RecentlyPlayed";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <div className={css.wrapper}>
        <section className={css.section}>
          <Heading
            title="Work"
            subtitle="All my work not protected under an NDA"
          />
          <ListProjects />
          <ExternalLink title={"Discover"} href={`/projects`} type="local" />
        </section>
        <section className={css.section}>
          <Heading title="Now" subtitle="What I've been up to recently" />
          <ListExperiences />
          <ExternalLink title={"Discover"} href={`/experiences`} type="local" />
        </section>
        <section>
          <Heading
            title="Music"
            subtitle="Do you ever feel compelled to move?"
          />
          <NowPlaying />
          <TopArtists />
          {/* <RecentlyPlayed /> */}
        </section>
      </div>
    </Page>
  );
};

export default Home;
