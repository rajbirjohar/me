import Head from "next/head";
import { format, parseISO } from "date-fns";
import { Chapter, allChapters } from "contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import css from "./styles.module.css";
import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import Views from "@/components/Chapters/Views";
import Signature from "@/components/Signature";
import LikeButton from "../../components/Chapters/Likes/LikeButton/index";
import Divider from "@/components/Divider";

function MyButton() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)} className={css.button}>
      Clicked me {clicks} times
    </button>
  );
}

const PostLayout = ({ chapter }: { chapter: Chapter }) => {
  const MDXContent = useMDXComponent(chapter.body.code);

  return (
    <>
      <Head>
        <title>Rajbir Johar | {chapter.title}</title>
        <meta content={chapter.description} name="description" />
        <meta property="article:published_time" content={chapter.date} />
        <meta name="keywords" content={chapter.tags.toString()} />
        <meta name="author" content={chapter.author} />
      </Head>
      <Link href={"/chapters"} className={css.link}>
        <>
          <IconArrowBarToLeft /> Index
        </>
      </Link>
      <article className={css.chapter}>
        <header>
          <p className={css.badge}>{chapter.category}</p>
          <h1>{chapter.title}</h1>
          <p className={css.author}>
            {chapter.author}
            <Divider />
            <time dateTime={chapter.date} suppressHydrationWarning>
              {format(parseISO(chapter.date), "LLLL d, yyyy")}
            </time>
            <Divider />
            <Views slug={chapter.slug} />
          </p>
        </header>
        <hr />
        <div className={css.content}>
          <MDXContent components={{ MyButton }} />
        </div>
        <div className={css.sticky}>
          <LikeButton slug={chapter.slug} />
        </div>
        <hr />
        <footer>
          <div className={css.signature}>
            <Signature />
            <cite>— {chapter.author}</cite>
          </div>
          <h4>Related</h4>
          <div className={css.tags}>
            {chapter.tags.map((tag: string) => (
              <Link
                key={tag}
                className={css.tag}
                href={{
                  pathname: "/chapters",
                  query: { tag: tag },
                }}
                passHref
                shallow
                replace
              >
                #{tag}&nbsp;
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
};

export default PostLayout;

export async function getStaticProps(params: Params) {
  const chapter: Chapter | undefined = allChapters.find((chapter: Chapter) => {
    return chapter._raw.flattenedPath === params.params.slug;
  });

  return {
    props: {
      chapter: chapter,
    },
  };
}

export async function getStaticPaths() {
  const paths: string[] = allChapters
    .filter((chapter) => chapter.draft === false)
    .map((chapter: Chapter) => chapter.url);
  return {
    paths,
    fallback: false,
  };
}
