import { Heading, HeadingWrapper, SubHeading } from "@/ui/layout/Heading";
import styles from "./page.module.css";
import { getAllJournals } from "@/lib/journal";
import { Journal } from "@/ui/specialized/Journal";
import {
  Timeline,
  TimeLineContent,
  TimelineDate,
  TimelineDescription,
  TimeLineHeader,
  TimeLineItem,
  TimeLineTitle,
} from "@/ui/specialized/Timeline";
import { experiences } from "@/ui/specialized/Timeline/experiences";
import Link from "next/link";

export default function Home() {
  const journals = getAllJournals();

  return (
    <div className={styles.wrapper}>
      <HeadingWrapper>
        <Heading>In pursuit of extraordinary.</Heading>
        <SubHeading>
          Hello! I&#39;m Rajbir. I build delightful user interfaces for complex systems.
        </SubHeading>
      </HeadingWrapper>
      <section className={styles.section}>
        <h2>Contributions</h2>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimeLineItem key={index} icon={experience.icon}>
              <TimeLineContent>
                <TimeLineHeader>
                  <TimeLineTitle>{experience.title}</TimeLineTitle>
                  <TimelineDate>
                    {experience.startDate}{" "}
                    {experience.endDate ? `- ${experience.endDate}` : ""}
                  </TimelineDate>
                </TimeLineHeader>
                <TimelineDescription>
                  {experience.description}
                </TimelineDescription>
              </TimeLineContent>
            </TimeLineItem>
          ))}
        </Timeline>
      </section>
      <section className={styles.section}>
        <h2>Journals</h2>
        <div className={styles.journals}>
          {journals.length < 1 && <p>No musings today.</p>}
          {journals.map((journal) => (
            <Journal key={journal.slug} journal={journal} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2>Endeavors</h2>
        <p>
          I am currently working on a few personal projects that are close to my
          heart. The most recent one is a highly specialized platform for rising
          fashion designers and students to showcase their work and connect with
          industry professionals. It&#39;s currently in beta but we are hoping
          to launch it soon. Feel free to{" "}
          <Link
            href="https://blnkla.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            check it out here
          </Link>
          .
        </p>
        <p>
          Another idea I am exploring is building a studio with a good friend to
          create unique and creative landing pages for independent game
          developers. More on that soon.
        </p>
      </section>
    </div>
  );
}
