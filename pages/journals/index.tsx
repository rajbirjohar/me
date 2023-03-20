import { Journal, allJournals } from "@/.contentlayer/generated";
import Prose from "@/core/atoms/Prose";
import Animate from "@/core/organisms/Animate";
import JournalList from "@/core/organisms/JournalList";
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
          <Animate>
            <h1>Journals</h1>
          </Animate>
          <Animate>
            <p>Writing about design, development, and professional growth.</p>
            <hr />
          </Animate>
        </Prose>
        <JournalList journals={props.journals} />
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
