import Prose from "@/core/atoms/Prose";
import Head from "next/head";
import Link from "next/link";
import css from "@/styles/styles.module.css";
import { ArrowUpRight } from "lucide-react";
import Animate from "@/core/organisms/Animate";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const fetchCurrentlyPlaying = async () => {
    const response = await fetch("/api/spotify/playing");
    return response.json();
  };

  const song = useQuery<Track>({
    queryKey: ["playing"],
    queryFn: fetchCurrentlyPlaying,
  });

  return (
    <>
      <Head>
        <title>Rajbir Johar</title>
        <meta
          content="An overview of different aspects of my career and what I've been up to lately."
          name="description"
        />
      </Head>
      <section>
        <Prose>
          <Animate>
            <h1>Rajbir Johar</h1>
          </Animate>
          <Animate>
            <p>I&#39;m Rajbir. I&#39;m a developer and designer.</p>
            <p>I also take photos, play bass, and get lost on canyon drives.</p>
          </Animate>
          <Animate>
            <h2>Lately,</h2>
          </Animate>
          <Animate>
            <p>I craft beautiful interfaces for mind blowing ideas.</p>
            <p>
              My work deals with Typescript and React and plenty of CSS. From
              micro-interactions to stunning visual design, my goal is to create
              interfaces that not only look amazing but also feel effortless to
              use.
            </p>
          </Animate>
          <Animate>
            {song.isError || (song.isLoading && <></>)}
            {song.data && song.data.title !== "" && (
              <p>
                Currently listening to{" "}
                <Link href={song.data.url}>{song.data.title}</Link> by{" "}
                {song.data.artist}.
              </p>
            )}
            <hr />
          </Animate>
          <Animate>
            <h3
              style={{
                fontSize: "var(--font-base)",
              }}
            >
              Elsewhere
            </h3>
            <div className={css.links}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/rajbirjohar"}
              >
                <ArrowUpRight />
                Github
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/rajbirjohar/"}
              >
                <ArrowUpRight />
                LinkedIn
              </Link>
            </div>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
