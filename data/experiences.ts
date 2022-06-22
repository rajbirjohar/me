import {
  IconAlbum,
  IconBolt,
  IconCake,
  IconCode,
  IconPlaneDeparture,
  IconSchool,
} from "@tabler/icons";
import { Experience } from "types/portfolio";

const experiences: Experience[] = [
  {
    title: "Arizona",
    position: "Goodbye California",
    startDate: "June 2022",
    endDate: "current",
    year: 2022,
    caption: "Here's to new adventures in the Grand Canyon State.",
    icon: IconPlaneDeparture,
  },
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
    position: "Director",
    startDate: "April 2021",
    endDate: "April 2022",
    year: 2022,
    caption:
      "Organized the largest hackathon in the Inland Empire with over 750 attendees. Director of four teams overseeing operations, sponsorship, marketing, and web development.",
    icon: IconCode,
    url: "https://www.citrushack.com/",
  },
  {
    title: "Nexus",
    position: "Senior Design",
    startDate: "September 2021",
    endDate: "April 2022",
    year: 2022,
    caption:
      "Built Nexus, the one-stop shop for a student at UCR hosting information on different clubs, organizations, and events as well as reviews on classes provided by other students.",
    icon: IconAlbum,
    url: "https://nexus-ucr.vercel.app/",
  },
  {
    title: "Citrus Hack",
    position: "FE Developer",
    startDate: "April 2020",
    endDate: "April 2021",
    year: 2021,
    caption:
      "Worked with the marketing team to design, develop, and deploy the official Citrus Hack website. Served as the portal to over 500 attendees for Citrus Hack 2021.",
    icon: IconCode,
  },
  {
    title: "Wrote my First Line of Code",
    startDate: "September 2017",
    year: 2017,
    caption: "<code>Woah! Hello World!</code>",
    icon: IconCode,
  },
  {
    title: "Born",
    position: "1 of 1",
    startDate: "February 2000",
    year: 2000,
    caption: "Haha, yes.",
    icon: IconCake,
  },
];

export default experiences;
