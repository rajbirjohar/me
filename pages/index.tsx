import type { NextPage } from "next";
import Head from "next/head";
import css from "@/styles/Index.module.css";
import Heading from "@/components/Heading";
import ListExperiences from "@/components/Experiences";
import Page from "@/components/Page";
import ExternalLink from "@/components/ExternalLink";
import NowPlaying from "@/components/Music/NowPlaying";
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
            title="After Hours"
            subtitle="A couple of my favorite projects outside of work"
          />
          <FeaturedProjects />
          <ExternalLink title={"Discover"} href={`/projects`} type="local" />
        </section>
        <section>
          <Heading title="Now" subtitle="What I've been up to recently" />
          <ListExperiences />
          <ExternalLink title={"Discover"} href={`/experiences`} type="local" />
        </section>
        <section>
          <Heading
            title="Stack"
            subtitle="Is the craftsman only as good as their tools?"
          />
          <p>
            I primarily find myself at home on a Mac. After hours, I write my
            code on a Macbook Pro 14&#34;. My code editor of choice is{" "}
            <ExternalLink
              title="Visual Studio Code"
              type="external"
              href="https://code.visualstudio.com/"
            />
            . I use{" "}
            <ExternalLink
              title="Figma"
              type="external"
              href="https://www.figma.com/"
            />{" "}
            for design,
            <ExternalLink
              title="FigJam"
              type="external"
              href="https://www.figma.com/figjam/"
            />{" "}
            for brainstorming and{" "}
            <ExternalLink
              title="Illustrator"
              type="external"
              href="https://www.adobe.com/products/illustrator.html"
            />{" "}
            for icons. For photos, I rock a Canon EOS R6 and my current favorite
            lens is the RF 24-70mm.
          </p>
        </section>
        <section>
          <Heading title="Music" subtitle="Music that's inspired me lately" />
          <NowPlaying />
          <ExternalLink title={"Discover"} href={`/music`} type="local" />
        </section>
      </div>
    </Page>
  );
};

export default Home;
