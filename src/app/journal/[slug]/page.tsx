import { getAllJournals, getJournalBySlug, markdownToHtml } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { format } from "date-fns";

export default async function Journal({ params }: Params) {
  const journal = getJournalBySlug(params.slug);

  if (!journal) {
    return notFound();
  }

  const content = await markdownToHtml(journal.content || "");

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{journal.title}</h1>
        <time className={styles.date}>
          {format(journal.date, "MMMM do, y")}
        </time>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.prose}
      />
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getJournalBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `Rajbir Johar | ${post.title}`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const journals = getAllJournals();

  return journals.map((journal) => ({
    slug: journal.slug,
  }));
}
