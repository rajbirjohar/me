import Prose from "@/core/atoms/Prose";
import { item } from "@/utils/animations";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <Prose>
          <motion.h2 variants={item}>Projects</motion.h2>
          <motion.p variants={item}>
            <em>Stay tuned.</em>
          </motion.p>
        </Prose>
      </section>
    </>
  );
}
