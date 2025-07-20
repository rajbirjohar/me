import {
  CitrusIcon,
  CodeXmlIcon,
  type LucideIcon,
  MonitorCogIcon,
} from "lucide-react";

interface Experience {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: LucideIcon;
  startDate: string;
  endDate?: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer at Inventives Research Labs",
    description: (
      <p>
        I worked on various projects building performant and intuitive UIs that
        interfaced with a variety of AI models from speech-to-text and back, to
        processing and visualization of large datasets.
      </p>
    ),
    icon: CodeXmlIcon,
    startDate: "2021",
    endDate: "2023",
  },
  {
    title: "Web Developer and Director of Citrus Hack",
    description: (
      <>
        <p>
          I was responsible for building the frontend portal for the hackathon.
        </p>
        <p>
          Eventually, I became the director of Citrus Hack. I was responsible
          for organizing the hackathon, overseeing a team of developers,
          designers, and event coordinators.
        </p>
      </>
    ),
    icon: CitrusIcon,
    startDate: "2020",
    endDate: "2022",
  },
  {
    title: "UCR Residential Technician",
    description: (
      <>
        <p>
          I set up and tore down media events on campus, assisted students with
          technical issues and provided general support for the residential
          community.
        </p>
        <p>
          Overall, an extremely valuable experience developing my soft skills.
        </p>
      </>
    ),
    icon: MonitorCogIcon,
    startDate: "2019",
    endDate: "2022",
  },
];
