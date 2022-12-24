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
import { Experience } from "types/alpine";

const experiences: Experience[] = [
  {
    title: "Flew to Canada",
    month: "September",
    year: 2022,
    caption: (
      <p>
        Definitely one of the most memorable experiences I&#39;ve had. Explored
        Algonquin Park and enjoyed the rain.
      </p>
    ),
    icon: IconPlaneDeparture,
  },
  {
    title: "Launched Chromax",
    month: "June",
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
    month: "June",
    year: 2022,
    caption: <p>Stay casual California. Here&#39;s to new adventures.</p>,
    icon: IconPlaneDeparture,
  },
  {
    title: "Started at Inventives",
    month: "January - current",
    year: 2022,
    caption: (
      <p>
        Working with React and TypeScript to build aesthetic and accessible
        interfaces. Having fun and breaking things along the way.
      </p>
    ),
    icon: IconBolt,
    substeps: [
      {
        title: "Frontend Lead",
        range: "January 2023 - current",
        caption: <p>Leading my first project from scratch.</p>,
        icon: IconBolt,
      },
      {
        title: "Frontend/UX Engineer",
        range: "June - December",
        caption: (
          <p>
            Contributed to the designs behind the developement and picked up
            Flutter and Dart for mobile app development.
          </p>
        ),
        icon: IconBolt,
      },
      {
        title: "Intern",
        range: "January - June",
        caption: (
          <p>
            Built a peer-2-peer video chat app and learned a ton about the inner
            workings of a start up environment.
          </p>
        ),
        icon: IconBolt,
      },
    ],
  },
  {
    title: "Peered Through a New Lens",
    month: "May",
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
    month: "June",
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
    month: "April",
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
    month: "July",
    year: 2021,
    caption: <p>Explored the bay with good friends and made great memories.</p>,
    icon: IconRoad,
  },
  {
    title: "Launched Nexus",
    month: "April",
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
    title: "Picked Out My First Car",
    month: "January",
    year: 2021,
    caption: <p>Discovered a love for the fast lane and mountain roads.</p>,
    icon: IconGauge,
  },
  {
    title: "Joined Citrus Hack",
    month: "April",
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
    substeps: [
      {
        title: "Director",
        range: "July 2021 - May 2022",
        caption: "",
        icon: IconCode,
      },
      {
        title: "Frontend Lead",
        range: "July - May 2021",
        caption: "",
        icon: IconCode,
      },
      {
        title: "Committee Member",
        range: "September - May",
        caption: "",
        icon: IconCode,
      },
    ],
  },
  {
    title: "Flew Solo for the First Time",
    month: "March",
    year: 2019,
    caption: <p>Discovered an incredibly strong wanderlust.</p>,
    icon: IconPlaneDeparture,
  },
  {
    title: "Built my First Keyboard",
    month: "June",
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
    month: "September",
    year: 2017,
    caption: (
      <>
        <p>
          Took a leap of faith and signed up for AP CS in high school. It did{" "}
          <i>not</i> click at all the first time. Pushed through and pursued it
          in college and{" "}
          <code>console.log(&#34;its kinda crazy where it led me&#34;)</code>.
        </p>
      </>
    ),
    icon: IconCode,
  },
  {
    title: "Destroyed my First Computer",
    month: "April",
    year: 2016,
    caption: <p>Subsequently encouraging me to build one (of many).</p>,
    icon: IconCpu,
  },
  {
    title: "Bricked my iPhone",
    month: "December",
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
    month: "December",
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
    month: "February",
    year: 2000,
    caption: <p>Edition one of one.</p>,
    icon: IconCake,
  },
];

export default experiences;
