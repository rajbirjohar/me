import { IconBolt, IconCake, IconCode, IconSchool } from "@tabler/icons";
import { Experience } from "types/portfolio";

const experiences: Experience[] = [
  {
    title: "Inventives",
    position: "FE Developer",
    startDate: "January 2022",
    endDate: "current",
    year: 2022,
    caption:
      "Working with React and Typescript to build aesthetic and accessible interfaces. Having fun and learning along the way.",
    icon: IconBolt,
  },
  {
    title: "UC Riverside",
    position: "B.S. Computer Science",
    startDate: "September 2018",
    endDate: "June 2022",
    year: 2022,
    caption:
      "Graduated with a Bachelors of Science in Computer Science. Heavily involved with Citrus Hack. Worked at Prytaneum and ResTech.",
    icon: IconSchool,
  },
  {
    title: "Citrus Hack",
    position: "Director, FE Developer",
    startDate: "September 2019",
    endDate: "April 2022",
    year: 2022,
    caption:
      "Organized the largest hackathon in the Inland Empire with over 750 attendees. Director of four teams overseeing operations, sponsorship, marketing, and web development.",
    icon: IconCode,
  },
  {
    title: "Born",
    startDate: "February 2000",
    year: 2000,
    caption: "Yes, haha.",
    icon: IconCake,
  },
];

export default experiences;
