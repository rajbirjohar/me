import Prose from "@/core/atoms/Prose";
import Head from "next/head";
import Link from "next/link";
import Animate, { item } from "@/core/organisms/Animate";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import css from "@/styles/styles.module.scss";

const MotionImage = motion(Image);

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
          <MotionImage
            src={profile}
            alt="A black and white profile picture of me. I'm wearing round black glasses and a black jacket and I'm standing in front of a wall of leaves."
            className={css.profile}
            variants={item}
          />
          <motion.h1 variants={item}>Rajbir Johar</motion.h1>
          <Animate>
            <p>I&#39;m Rajbir. I&#39;m a developer and designer.</p>
            <p>I also take photos, play bass, and get lost on canyon drives.</p>
          </Animate>
          <Animate>
            <AnimatePresence mode="wait">
              {song.isError || (song.isLoading && <></>)}
              {song.data && song.data.title !== "" && (
                <motion.p
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  Currently listening to{" "}
                  <Link href={song.data.url}>{song.data.title}</Link> by{" "}
                  {song.data.artist}.
                </motion.p>
              )}
            </AnimatePresence>
          </Animate>
          <motion.h2 variants={item}>Lately</motion.h2>
          <Animate>
            <p>
              I&#39;m a <strong>UX Engineer Lead</strong> at Inventives, where
              I&#39;m responsible for designing, coding and maintaining user
              interfaces.
            </p>
            <p>
              My work deals with Typescript and React and plenty of CSS. From
              micro-interactions to stunning visual design, my goal is to create
              interfaces that look amazing and feel effortless to use.
            </p>
          </Animate>
          <Animate>
            <p>
              I&#39;m an artist at heart and I approach my work with a unique
              perspective. I believe in breaking boundaries and creating the
              impossible.
            </p>
            <p>
              Although I spend most of my time coding, I find great joy in
              designing visually stunning and user-friendly interfaces. I find
              that my affinity for design combined with my understanding of the
              web brings out incredible websites that just works.
            </p>
          </Animate>
          <motion.h2 variants={item}>Past</motion.h2>
          <Animate>
            <p>
              I recently earned a Bachelors of Science (B.S.) in Computer
              Science so I&#39;m still on the path to acquiring more experience.
              Although, I&#39;m eager to see what&#39;s ahead.
            </p>
            <p>
              During college, I directed the largest hackathon in the California
              Inland Empire. I oversaw a team of 10 to host an event that would
              inspire many more upcoming engineeers.
            </p>
          </Animate>
          <motion.h2 variants={item}>After Hours</motion.h2>
          <Animate>
            <p>
              I find myself roaming the streets or when I can, driving through
              the forests and to take photos. I like to capture the world the
              way I see it.
            </p>
            <p>
              After year of violin and two years of cello, it was only fitting I
              picked up the bass. I&#39;m enjoying the deeper tone of my
              instrument and I think it will stay with me for a while.
            </p>
          </Animate>
          <motion.h2 variants={item}>Education</motion.h2>
          <motion.p variants={item}>
            I attend the University of California at Riverside where I earned my
            B.S. in Computer Science.
          </motion.p>
        </Prose>
      </section>
    </>
  );
}
