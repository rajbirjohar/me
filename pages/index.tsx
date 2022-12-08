import type { NextPage } from "next";
import Head from "next/head";
import css from "@/styles/Index.module.css";
import ListExperiences from "@/components/Experiences";
import Page from "@/components/Page";
import ExternalLink from "@/components/ExternalLink";
import NowPlaying from "@/components/Music/NowPlaying";
import FeaturedProjects from "@/components/Projects/Featured";
import Image from "next/image";
import profilePic from "../public/me_square.jpeg";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Rajbir Johar</title>
      </Head>

      <section className={css.intro}>
        <Image
          src={profilePic}
          alt="A picture of me standing in front of a forest with a cloudy sky. I'm wearing a beige shirt and I have round, black glasses."
          width="0"
          height="0"
          sizes="100vw"
          className={css.profile}
          quality={100}
          placeholder="blur"
        />
        <h1>Rajbir Johar</h1>
        <p>🌲 Exploring.</p>
        <p>
          <em>Glad to have you.</em> Frontend and UX Engineer based in{" "}
          <s>Southern California</s> Arizona. Building and typing on bespoke
          keyboards. Getting lost on canyon drives during my downtime. Crafting
          aesthetic interfaces at Inventives for <em>mind blowing ideas.</em>
        </p>
        <p>
          This space is ever changing, just like we are as humans. Tomorrow
          might not look like today so enjoy today while you can.
        </p>
      </section>
      <section>
        <h2>After Hours</h2>
        <FeaturedProjects />
        <ExternalLink title={"Discover"} href={`/projects`} type="local" />
      </section>
      <section>
        <h2>Now</h2>
        <ListExperiences />
        <ExternalLink title={"Discover"} href={`/experiences`} type="local" />
      </section>
      <section>
        <h2>Stack</h2>
        <p>
          I primarily write my code on my Macbook Pro 14&#34;. My editor of
          choice is{" "}
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
          for design,{" "}
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
          for icons. For photos, I rock a Canon EOS R6 and I bounce between my
          RF 35mm prime and RF 24-70mm L.
        </p>
      </section>
      <section>
        <h2>Music</h2>
        <NowPlaying />
        <ExternalLink title={"Discover"} href={`/music`} type="local" />
      </section>
    </Page>
  );
};

export default Home;
