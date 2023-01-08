import {
  IconBolt,
  IconCake,
  IconCode,
  IconCpu,
  IconNotebook,
  IconPalette,
  IconPrison,
  IconSchool,
} from "@tabler/icons";
import { Experience } from "types/alpine";

const experiences: Experience[] = [
  {
    title: "Launched Chromax",
    month: "September",
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
    title: "Started at Inventives",
    month: "January - current",
    year: 2022,
    caption: (
      <p>
        Working with React and TypeScript to build aesthetic and accessible
        interfaces.
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
    title: "Started Writing Code",
    month: "September",
    year: 2017,
    caption: (
      <>
        <p>
          Signed up for AP CS in high school. Pushed through and pursued it in
          college and{" "}
          <code>console.log(&#34;it&#39;s crazy where it led me&#34;)</code>.
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
        Learned that breaking things is the first step to understanding them.
      </p>
    ),
    icon: IconPrison,
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
