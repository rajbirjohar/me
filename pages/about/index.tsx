import Head from "next/head";
import css from "./styles.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | About</title>
      </Head>
      <article className={css.article}>
        <header>
          <h1>Whoami</h1>
          <p>Well that&#39;s a great question isn&#39;t it? 🤔 </p>
        </header>
        <section>
          <h2>A Detailed View</h2>
          <p>
            I am currently an engineer at Inventives. I&#39;m primarily focused
            on designing, architecting, and developing interfaces. Although, I
            found a strong yearning for building and breaking things alot
            earlier in life.
          </p>
          <p>
            I didn&#39;t really have much direction on what I wanted to be
            growing up. But I do remember enjoying jailbreaking my iPhone and
            pretending to be a hacker with <code>ipconfig</code>. On the flip
            side, I also had an affinity for artistic stuff like drawing and
            painting. To me they seemed like totally different worlds and I felt
            like I had to choose one or the other especially as that growing
            question kept being asked.
          </p>
          <blockquote>What do you want to be when you grow up?</blockquote>
          <p>
            It wasn&#39;t until college where I discovered that I could carve
            out my little slice of the world wide web with <code>code</code>{" "}
            <i>and</i> with <span className={css.gradient}>art</span>.
          </p>
        </section>
        <section>
          <h2>Other Things I Enjoy</h2>
          <h3>📸 Photography</h3>
          <p>
            Recently, I started shooting photography after leaving my camera to
            collect dust for a few years. I find myself shooting portraits the
            most as it gives me an opportunity to connect with people and let
            them see how I see them.
          </p>
          <h3>⌨️ Keyboards</h3>
          <p>
            I&#39;ve built an unholy amount of keyboards. Way too many. They
            make my job very enjoyable though. I figured if I&#39;m going to be
            coding for the rest of my life, might as well invest in the tool of
            the trade.
          </p>
          <h3>🐎 Automotives</h3>
          <p>
            I&#39;m a sucker for a tasteful exhaust note. Feeling the revs
            through the vibrations of the steering wheel stirs up that small
            thrill seeking part of me.
          </p>
        </section>
      </article>
    </>
  );
}
