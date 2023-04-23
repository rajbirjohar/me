import Prose from "@/core/atoms/Prose";
import Head from "next/head";
import Link from "next/link";
import Animate, { item } from "@/core/organisms/Animate";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import css from "@/styles/styles.module.scss";
import Hello from "@/core/atoms/Hello";

const MotionImage = motion(Image);

export default function Home() {
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
            layout="preserve-aspect"
          />
          <Hello />
          <Animate>
            <p>I&#39;m Rajbir. I&#39;m a developer and designer. </p>
            <p>I also take photos, play bass, and get lost on canyon drives.</p>
          </Animate>
          <motion.hr variants={item} />
          <Animate>
            <p>
              Building slick and accessible interfaces at Inventives. Aspiring
              CSS wizard. Breaking things and learning along the way.{" "}
            </p>
            <p>
              Personally working on a few personal projects with a friend at{" "}
              <Link
                href={"https://www.fearlessmouse.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fearless Mouse
              </Link>
              .
            </p>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
