import {
  IconBolt,
  IconCake,
  IconCamera,
  IconCode,
  IconNotebook,
  IconPaw,
  IconPlaneDeparture,
  IconRoad,
  IconSchool,
} from "@tabler/icons";
import { Experience } from "types/portfolio";

const experiences: Experience[] = [
  {
    title: "Arizona",
    position: "Goodbye California",
    range: "June 2022 - current",
    year: 2022,
    caption: "Here's to new adventures in the Grand Canyon State.",
    icon: IconPlaneDeparture,
  },
  {
    title: "Inventives",
    position: "Frontend Developer",
    range: "January 2022 - current",
    year: 2022,
    caption:
      "Working with React and Typescript to build aesthetic and accessible interfaces. Having fun and breaking things along the way.",
    icon: IconBolt,
  },
  {
    title: "Restarted Photography",
    range: "May 2022",
    year: 2022,
    caption: "Picked up an R6 and some primes.",
    icon: IconCamera,
    url: "https://www.instagram.com/rajbir.johar/",
  },
  {
    title: "UC Riverside",
    position: "B.S. Computer Science",
    range: "September 2018 - June 2022",
    year: 2022,
    caption:
      "Graduated with a Bachelors of Science in Computer Science. Heavily involved with Citrus Hack. Worked at Prytaneum and ResTech.",
    icon: IconSchool,
  },
  {
    title: "Citrus Hack",
    position: "Director",
    range: "April 2021 - April 2022",
    year: 2022,
    caption:
      "Directed Citrus Hack, the largest hackathon in the Inland Empire with over 750 attendees. Oversaw operations, sponsorship, marketing, and web development.",
    icon: IconCode,
    url: "https://www.citrushack.com/",
  },
  {
    title: "Launched Nexus",
    range: "September 2021 - April 2022",
    year: 2022,
    caption:
      "Built Nexus, the one-stop shop for a student at UCR hosting information on different clubs, organizations, and events as well as reviews on classes provided by other students.",
    icon: IconNotebook,
    url: "https://nexus-ucr.vercel.app/",
  },
  {
    title: "Road trip to San Franscisco",
    range: "July 2021",
    year: 2021,
    caption: "Three good friends exploring the bay.",
    icon: IconRoad,
  },
  {
    title: "Citrus Hack",
    position: "Frontend Lead",
    range: "April 2020 - April 2021",
    year: 2021,
    caption:
      "Designed, developed, and deployed the official Citrus Hack website. Served as the portal to over 500 attendees for Citrus Hack 2021.",
    icon: IconCode,
  },
  {
    title: "Adopted Two Furballs",
    range: "October 2020",
    year: 2020,
    caption: "Annoying me with love and claws everyday.",
    icon: IconPaw,
  },
  {
    title: "First Solo Road Trip to Arizona",
    range: "March 2020",
    year: 2020,
    caption: "Just me, smooth music, and open road.",
    icon: IconRoad,
  },
  {
    title: "First Solo Flight to Arizona",
    range: "March 2019",
    year: 2019,
    caption: "Southwest pretzels are the only reason I keep choosing them.",
    icon: IconPlaneDeparture,
  },
  {
    title: "Started Writing Code",
    range: "September 2017",
    year: 2017,
    caption: "<code>Woah! Hello World!</code>",
    icon: IconCode,
  },
  {
    title: "Born",
    position: "1 of 1",
    range: "February 2000",
    year: 2000,
    caption: "Haha, yes.",
    icon: IconCake,
  },
];

export default experiences;
