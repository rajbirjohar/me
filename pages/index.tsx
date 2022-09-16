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
import FeaturedProjects from "@/components/Projects/Featured";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <div className={css.wrapper}>
        <section>
          <Heading
            title="Featured"
            subtitle="Some of the creations I'm extra proud about"
          />
          <FeaturedProjects />
        </section>
        <section className={css.section}>
          <Heading title="Work" subtitle="All of my other open source work" />
          <ListProjects />
          <ExternalLink title={"Discover"} href={`/projects`} type="local" />
        </section>
        <section className={css.section}>
          <Heading title="Now" subtitle="What I've been up to recently" />
          <ListExperiences />
          <ExternalLink title={"Discover"} href={`/experiences`} type="local" />
        </section>
        <section>
          <Heading title="Music" subtitle="Music that's inspired me lately" />
          <NowPlaying />
          <TopArtists />
          <ExternalLink title={"Discover"} href={`/music`} type="local" />
        </section>
      </div>
    </Page>
  );
};

export default Home;
