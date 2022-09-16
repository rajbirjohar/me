import {
  IconBolt,
  IconCake,
  IconCamera,
  IconCode,
  IconCpu,
  IconDeviceGamepad2,
  IconGauge,
  IconNotebook,
  IconPalette,
  IconPlaneDeparture,
  IconPrison,
  IconRoad,
  IconSchool,
} from "@tabler/icons";
import { Experience } from "types/portfolio";

const experiences: Experience[] = [
  {
    title: "Launched Chromax",
    range: "June 2022",
    year: 2022,
    caption: (
      <p>
        Built Chromax, a color palette app. Generates color scales on the fly
        with a little math.
      </p>
    ),
    icon: IconPalette,
    url: "https://www.chromax.app/",
  },
  {
    title: "Moved to Arizona",
    range: "June 2022",
    year: 2022,
    caption: <p>Stay casual California. Here&#39;s to new adventures.</p>,
    icon: IconPlaneDeparture,
  },
  {
    title: "Started at Inventives",
    range: "January 2022 - current",
    year: 2022,
    caption: (
      <p>
        Working with React and TypeScript to build aesthetic and accessible
        interfaces. Having fun and breaking things along the way.
      </p>
    ),
    icon: IconBolt,
  },
  {
    title: "Peered Through a New Lens",
    range: "May 2022",
    year: 2022,
    caption: (
      <p>
        Started shooting with a Canon R6. Capturing the world the way I want to
        see it.
      </p>
    ),
    icon: IconCamera,
    url: "https://www.instagram.com/rajbir.johar/",
  },
  {
    title: "Graduated",
    range: "September 2018 - June 2022",
    year: 2022,
    caption: (
      <p>
        Graduated with a B.S. in Computer Science. Heavily involved with Citrus
        Hack. Worked at Prytaneum and ResTech.
      </p>
    ),
    icon: IconSchool,
  },
  {
    title: "Directed Citrus Hack",
    range: "April 2021 - April 2022",
    year: 2021,
    caption: (
      <p>
        Directed Citrus Hack, the largest hackathon in the Inland Empire with
        over 750 attendees. Oversaw operations, sponsorship, marketing, and web
        development.
      </p>
    ),
    icon: IconCode,
    url: "https://www.citrushack.com/",
  },
  {
    title: "Drove to San Franscisco",
    range: "July 2021",
    year: 2021,
    caption: <p>Explored the bay with good friends and made great memories.</p>,
    icon: IconRoad,
  },
  {
    title: "Launched Nexus",
    range: "September 2021 - April 2022",
    year: 2021,
    caption: (
      <p>
        Built Nexus, the one-stop shop for a student at UCR hosting information
        on different clubs, organizations, and events as well as reviews on
        classes provided by other students.
      </p>
    ),
    icon: IconNotebook,
    url: "https://nexus-ucr.vercel.app/",
  },
  {
    title: "Drove Solo to Arizona",
    range: "March 2021",
    year: 2021,
    caption: <p>Just me, smooth music, and open road.</p>,
    icon: IconRoad,
  },
  {
    title: "Picked Up my First Car",
    range: "January 2021",
    year: 2021,
    caption: <p>Discovered a love for the fast lane and mountain roads.</p>,
    icon: IconGauge,
  },
  {
    title: "Joined Citrus Hack",
    range: "April 2020 - April 2021",
    year: 2020,
    caption: (
      <p>
        Fell in love with the web. Designed, developed, and deployed the
        official Citrus Hack website. Served as the portal to over 500 attendees
        for Citrus Hack 2021.
      </p>
    ),
    icon: IconCode,
    url: "https://www.citrushack.com/",
  },
  {
    title: "Flew Solo to Arizona",
    range: "March 2019",
    year: 2019,
    caption: <p>Discovered an incredibly strong wanderlust.</p>,
    icon: IconPlaneDeparture,
  },
  {
    title: "Built my First Keyboard",
    range: "June 2018",
    year: 2018,
    caption: (
      <p>
        <i>Oh no.</i>
      </p>
    ),
    icon: IconCpu,
  },
  {
    title: "Started Writing Code",
    range: "September 2017",
    year: 2017,
    caption: (
      <>
        <p>
          Took a leap of faith and signed up for AP CS in high school. It did{" "}
          <i>not</i>
          click at all the first time. Pushed through and pursued it in college
          and{" "}
          <code>console.log(&#34;its kinda crazy where it led me&#34;)</code>.
        </p>
      </>
    ),
    icon: IconCode,
  },
  {
    title: "Destroyed my First Computer",
    range: "April 2016",
    year: 2016,
    caption: <p>Subsequently encouraging me to build one (of many).</p>,
    icon: IconCpu,
  },
  {
    title: "Bricked my iPhone",
    range: "December 2014",
    year: 2014,
    caption: (
      <p>
        Thought I was so cool jail breaking my iPhone and installing half the
        tweaks on Cydia. I was in fact, not cool.
      </p>
    ),
    icon: IconPrison,
  },
  {
    title: "Got an Xbox 360",
    range: "December 2012",
    year: 2012,
    caption: (
      <p>
        A golden era. <i>Assassin&#39;s Creed II</i> is still my favorite video
        game of all time.
      </p>
    ),
    icon: IconDeviceGamepad2,
  },
  {
    title: "Born",
    range: "February 2000",
    year: 2000,
    caption: <p>Edition one of one.</p>,
    icon: IconCake,
  },
];

export default experiences;
