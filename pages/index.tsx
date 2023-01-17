import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { Journal, allJournals } from "contentlayer/generated";
import css from "@/styles/Home.module.css";
import { IconArrowRight } from "@tabler/icons";
import { AnimatePresence, LayoutGroup, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import Journals from "core/organisms/Journals";
import ListExperiences from "core/organisms/Experiences";
import Playing from "core/organisms/Playing";
import me from "@/public/static/images/me.jpg";
import horseshoe from "@/public/static/images/horseshoe.jpg";
import route243 from "@/public/static/images/route243.jpg";
import anthem from "@/public/static/images/anthem.jpg";
import Stack from "core/molecules/Stack";
import ListProjects from "core/organisms/Projects";
import { pick } from "contentlayer/client";
import GradientButton from "@/atoms/GradientButton";
import Wave from "@/atoms/Wave";
import Header from "@/organisms/Header";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "你好",
  "こんにちは",
  "Hallo",
  "Привет",
  "Ciao",
  "안녕하세요",
  "أهلا",
  "สวัสดี",
  "Hallå",
  "Hej",
  "Xin chào",
  "Witam",
  "Hei",
  "שלום",
  "γεια",
  "Buna ziua",
  "Helló",
  "Ahoj",
  "Zdravo",
  "नमस्ते",
  "Сәлеметсіз бе",
  "Здравейте",
];

const cardStack = [
  {
    id: 0,
    alt: "A picture overlooking the river that makes Horseshoe Bend",
    image: horseshoe,
  },
  {
    id: 1,
    alt: "A picture of an empty mountain road in foggy conditions",
    image: route243,
  },
  {
    id: 2,
    alt: "A picture of a vintage, classic, orange car",
    image: anthem,
  },
];

function Hello(props: { index: number }) {
  const hello: Variants = {
    initial: {
      opacity: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
  };

  return (
    <h1 className={css.greeting} data-nosnippet>
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <motion.div
            className={css.hello}
            key={greetings[props.index]}
            variants={hello}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {greetings[props.index]}.&nbsp;
          </motion.div>
        </AnimatePresence>
        <br />
        <span className={css.name}>I&#39;m Rajbir.</span>
      </LayoutGroup>
    </h1>
  );
}

export default function Home(props: { journals: Journal[] }) {
  // Prevents a hydration error due to assigning
  // a random number to the index of the chosen
  // greeting.
  const [render, setRender] = useState(false);
  const [index, setIndex] = useState(
    Math.floor(Math.random() * greetings.length)
  );

  useEffect(() => {
    setRender(true);
  }, []);

  const handleNext = useCallback(() => {
    const idx = true ? 0 : index;
    setIndex(index + 1 === greetings.length ? idx : index + 1);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <>
      <Head>
        <title>Rajbir Johar</title>
        <meta
          content="A brief overview of different aspects of my career"
          name="description"
        />
      </Head>
      <div className={css.wrapper}>
        <div className={css.header}>
          <Header />
          <div className={css.hero}>
            <Image
              src={me}
              priority
              quality={100}
              alt={
                "A picture of me wearing a light grey beanie and a thick winter jacket. This was taken at Flagstaff."
              }
              className={css.profile}
            />
            {render && <Hello index={index} />}
          </div>
          <Wave />
        </div>
        <article className={css.content}>
          <section>
            <div className={css.bio}>
              <p>
                Frontend and UX Engineer at Inventives. Crafting aesthetic
                interfaces for mindblowing ideas.
              </p>
              <Link
                href="/about"
                aria-label="Navigate to the about me page to learn more about me."
              >
                <GradientButton>
                  Discover{" "}
                  <IconArrowRight className={css.arrow} strokeWidth={2.5} />
                </GradientButton>
              </Link>
            </div>
            <header>
              <h2>Recently Published</h2>
            </header>
            <Journals journals={props.journals} />
            <Link href="/journals" className={css.discover}>
              Read more{" "}
              <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            </Link>
          </section>
          <section>
            <header>
              <h2>Projects</h2>
            </header>
            <ListProjects />
            <Link href="/projects" className={css.discover}>
              Explore more{" "}
              <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            </Link>
          </section>
          <section>
            <header
              style={{
                marginBottom: "var(--space)",
              }}
            >
              <h2>Experiences</h2>
            </header>
            <div className={css.experiences}>
              <div>
                <ListExperiences />
              </div>
              <div className={css.stackwrapper}>
                <Stack cardStack={cardStack} />
              </div>
            </div>
            <Link href="/experiences" className={css.discover}>
              Discover more{" "}
              <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            </Link>
          </section>
          <section>
            <header>
              <h2>Music</h2>
            </header>
            <Playing />
            <Link href="/music" className={css.discover}>
              Listen more
              <IconArrowRight className={css.arrow} strokeWidth={2.5} />
            </Link>
          </section>
        </article>
      </div>
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
        "category",
        "title",
        "author",
        "description",
        "tags",
        "date",
        "slug",
      ])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return { props: { journals } };
}
