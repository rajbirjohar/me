import Prose from "@/core/atoms/Prose";
import Head from "next/head";
import Link from "next/link";
import css from "@/styles/styles.module.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <section>
        <Prose>
          <motion.h2 variants={item}>Hello, hello.</motion.h2>
          <motion.div variants={item}>
            <p>I&#39;m Rajbir. I&#39;m a developer and designer.</p>
            <p>I also take photos, play bass, and get lost on canyon drives.</p>
          </motion.div>
          <motion.h2 variants={item}>Lately,</motion.h2>
          <motion.div variants={item}>
            <p>I craft beautiful interfaces for mind blowing ideas.</p>
            <p>
              My work deals with Typescript and React and plenty of CSS. From
              micro-interactions to stunning visual design, my goal is to create
              interfaces that not only look amazing but also feel effortless to
              use.
            </p>
            <hr />
          </motion.div>
          <motion.div variants={item}>
            <h4>Elsewhere</h4>
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
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/rajbir.johar/"}
              >
                <ArrowUpRight />
                Instagram
              </Link>
            </div>
          </motion.div>
        </Prose>
      </section>
    </>
  );
}
