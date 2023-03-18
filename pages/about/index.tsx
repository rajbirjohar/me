import Prose from "@/core/atoms/Prose";
import Signature from "@/core/atoms/Signature";
import Head from "next/head";
import css from "./styles.module.css";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";

export default function About() {
  return (
    <>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <section>
        <Prose>
          <motion.h2 variants={item}>Who Am I</motion.h2>
          <motion.p variants={item}>
            Hi there! My name is Rajbir Johar and I am a{" "}
            <strong>Frontend Architect</strong> at Inventives, where I am
            responsible for designing, coding and maintaining user interfaces.
            My focus is on creating <strong>enjoyable user experiences</strong>{" "}
            and delivering <strong>aesthetic design language</strong> in all of
            my projects.
            <hr />
          </motion.p>
          <motion.p variants={item}>
            I am an artist at heart and I approach my work with a unique
            perspective. I believe in the importance of{" "}
            <strong>consistency</strong>, <strong>creativity</strong> and{" "}
            <strong>continuous learning</strong> to stay at the forefront of my
            field. Although I spend most of my time coding, I find great joy in
            designing visually stunning and user-friendly interfaces. My
            particular expertise in CSS allows me to bring my ideas to life.
          </motion.p>
          <motion.div className={css.signaturewrapper} variants={item}>
            <Signature />
          </motion.div>
        </Prose>
      </section>
    </>
  );
}
