import Link from "next/link";
import { inter } from "../Layout";
import css from "./styles.module.css";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { formatDistance } from "date-fns";

export default function Footer() {
  const { data } = useSWR("/api/github/lastupdated", fetcher);

  return (
    <footer className={inter.className}>
      <div className={css.footer}>
        <div className={css.content}>
          <p>Thanks for visiting.</p>
          <div className={css.grid}>
            <div className={css.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/rajbirjohar"}
              >
                Github
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/rajbirjohar/"}
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/rajbir.johar/"}
              >
                Instagram
              </a>
              <Link href="/">Home</Link>
            </div>
            <div className={css.links}>
              <Link href="/chapters">Chapters</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/experiences">Experiences</Link>
            </div>
            <div className={css.links}>
              <Link href="/music">Music</Link>
              <Link href="/snippets">Snippets</Link>
            </div>
          </div>
        </div>
        {data ? (
          <p className={css.lastupdated}>
            Last updated{" "}
            {formatDistance(new Date(data.lastUpdated), new Date(), {
              addSuffix: true,
            })}
          </p>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
}
