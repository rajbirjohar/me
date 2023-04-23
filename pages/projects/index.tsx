import Prose from "@/core/atoms/Prose";
import Animate, { item } from "@/core/organisms/Animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <Prose>
          <motion.h1 variants={item}>Projects</motion.h1>
          <motion.p variants={item}>More to come. Stay tuned.</motion.p>
          <motion.h2 variants={item}>Favorites</motion.h2>
          <Animate>
            <h3>
              <Link
                href={"https://nexus-ucr.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nexus
              </Link>
            </h3>
            <p>
              A review webapp for all courses taught at UCR. Written by students
              for the students. This was my first major undertaking as it
              incorporated software architecture design, frontend and backend
              development, and robust testing.
            </p>
          </Animate>
          <Animate>
            <h3>
              <Link
                href={"https://www.chromax.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chromax
              </Link>
            </h3>
            <p>
              A color palette webapp that generates colors on the fly with a
              little math. More features to come.
            </p>
          </Animate>
          <motion.h2 variants={item}>In the Works</motion.h2>
          <Animate>
            <h3>
              <Link
                href={"https://www.fearlessmouse.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fearless Mouse
              </Link>
            </h3>
            <p>A joint studio set out to create world changing projects.</p>
          </Animate>
          <Animate>
            <h3>Blip</h3>
            <p>By Fearless Mouse.</p>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
