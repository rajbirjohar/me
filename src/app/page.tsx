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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/core/Tooltip";
import { BookCard } from "@/ui/specialized/BookCard";

export default function Home() {
  const journals = getAllJournals();

  return (
    <div className={styles.wrapper}>
      <HeadingWrapper>
        <Heading>In pursuit of extraordinary.</Heading>
        <SubHeading>
          Hello! I&#39;m Rajbir. I build delightful user interfaces for complex
          systems.
        </SubHeading>
      </HeadingWrapper>
      <section className={styles.section}>
        <h2>Today</h2>
        <p>
          I currently lead a software engineering team in charge of our in-house
          construction logistics and management platform for{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span>TSMC&#39;s</span>
            </TooltipTrigger>
            <TooltipContent>
              TSMC stands for Taiwanese Semiconductor Manufacturing Company.
            </TooltipContent>
          </Tooltip>{" "}
          fabrication sites in the US.
        </p>
        <p>
          I&#39;m sinking hours into literary fiction. I recently finished{" "}
          <BookCard title="Demon Copperhead" isbn="9780571376483" />,{" "}
          <BookCard title="Foster" isbn="9780571255658" />, and{" "}
          <BookCard title="Small Things Like These" isbn="9780802158741" />.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Previously</h2>
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
        <h2>Writing</h2>
        {journals.length < 1 && <p>No musings today.</p>}
        {journals.map((journal) => (
          <Journal key={journal.slug} journal={journal} />
        ))}
      </section>
    </div>
  );
}
