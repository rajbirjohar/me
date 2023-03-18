import { Journal, allJournals } from "@/.contentlayer/generated";
import Prose from "@/core/atoms/Prose";
import JournalGrid from "@/core/organisms/JournalGrid";
import { item } from "@/utils/animations";
import { pick } from "contentlayer/client";
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Journals(props: { journals: Journal[] }) {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Journals</title>
        <meta
          content="My thoughts written down. I explore everything from design to development."
          name="description"
        />
      </Head>
      <section>
        <Prose>
          <motion.h2 variants={item}>Journals</motion.h2>
          <motion.div variants={item}>
            <p>Writing about design, development, and professional growth.</p>
            <hr />
          </motion.div>
        </Prose>
        <motion.div variants={item}>
          <JournalGrid journals={props.journals} />
        </motion.div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const journals = allJournals
    // Select only the fields needed to fill out the
    // cards for the journals
    .filter((journal) => journal.draft === false)
    .map((journal) =>
      pick(journal, [
        "title",
        "author",
        "description",
        "tags",
        "date",
        "slug",
        "image",
      ])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return { props: { journals } };
}
