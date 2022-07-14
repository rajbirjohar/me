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
    title: "Moved to Arizona",
    range: "June 2022",
    year: 2022,
    caption: "Goodbye California. Here's to new adventures.",
    icon: IconPlaneDeparture,
  },
  {
    title: "Started at Inventives",
    range: "January 2022 - current",
    year: 2022,
    caption:
      "Working with React and Typescript to build aesthetic and accessible interfaces. Having fun and breaking things along the way.",
    icon: IconBolt,
  },
  {
    title: "Seeing the World Differently",
    range: "May 2022",
    year: 2022,
    caption:
      "Shooting with a Canon R6 and a few cool primes. My favorite is definitely the 85mm.",
    icon: IconCamera,
    url: "https://www.instagram.com/rajbir.johar/",
  },
  {
    title: "Graduated",
    range: "September 2018 - June 2022",
    year: 2022,
    caption:
      "Graduated with a B.S. in Computer Science. Heavily involved with Citrus Hack. Worked at Prytaneum and ResTech.",
    icon: IconSchool,
  },
  {
    title: "Directed Citrus Hack",
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
    title: "Drove to San Franscisco",
    range: "July 2021",
    year: 2021,
    caption: "Three good friends exploring the bay.",
    icon: IconRoad,
  },
  {
    title: "Joined Citrus Hack",
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
    title: "Drove Solo to Arizona",
    range: "March 2020",
    year: 2020,
    caption: "Just me, smooth music, and open road.",
    icon: IconRoad,
  },
  {
    title: "Flew Solo to Arizona",
    range: "March 2019",
    year: 2019,
    caption: "Southwest pretzels are the only reason I keep choosing them.",
    icon: IconPlaneDeparture,
  },
  {
    title: "Started Writing Code",
    range: "September 2017",
    year: 2017,
    caption: "<code>Kinda crazy</code>",
    icon: IconCode,
  },
  {
    title: "Born",
    range: "February 2000",
    year: 2000,
    caption: "One of one.",
    icon: IconCake,
  },
];

export default experiences;
