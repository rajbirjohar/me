import Prose from "@/core/atoms/Prose";
import Signature from "@/core/atoms/Signature";
import Head from "next/head";
import Animate, { item } from "@/core/organisms/Animate";

import Image from "next/image";
import css from "./styles.module.css";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function About() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | About</title>
        <meta
          content="A short description about who I am, what I do, and what I am passionate about."
          name="description"
          key="description"
        />
      </Head>
      <section>
        <Prose>
          <Animate>
            <h1>Who Am I</h1>
          </Animate>
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
              designing visually aesthetic and user-friendly interfaces. I find
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
          <Animate>
            <p>
              I attended the University of California at Riverside where I
              earned my B.S. in Computer Science.
            </p>
            <p>
              During college, I directed the largest hackathon in the California
              Inland Empire. I oversaw a team of ten to host an event that would
              inspire many more upcoming engineeers.
            </p>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
