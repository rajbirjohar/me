import { getAllJournals, getJournalBySlug, markdownToHtml } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";

export default async function Journal(props: Params) {
  const params = await props.params;
  const journal = getJournalBySlug(params.slug);

  if (!journal) {
    return notFound();
  }

  const content = await markdownToHtml(journal.content || "");

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link href="/journal" className={styles.back}>
          <ArrowLeftIcon className={styles.icon} /> Journals
        </Link>
        <h1 className={styles.title}>{journal.title}</h1>
        <time className={styles.date}>
          {format(journal.date, "MMMM do, y")}
        </time>
      </header>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.prose}
      />
    </article>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;

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
