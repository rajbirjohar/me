import {
  CitrusIcon,
  CodeXmlIcon,
  LucideIcon,
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
    title: "Lead Software Engineer at PRS",
    description: (
      <>
        <p>
          Currently, I am leading the software engineering team at PRS, where I
          am responsible for overseeing the development of our in-house
          construction logistics and management platform for TSMC&#39;s (Taiwan
          Semiconductor Manufactoring Company) fabrication sites. My role
          involves architecting and implementing solutions that streamline
          construction processes, save on material costs, and overall improve
          business intelligence.
        </p>
        <p>
          While the platform is still in its early stages and only operating in
          the US, we are working towards expanding it to other regions,
          including Germany and Japan.
        </p>
      </>
    ),
    icon: CodeXmlIcon,
    startDate: "2024",
  },
  {
    title: "Software Engineer at Inventives Research Labs",
    description: (
      <p>
        Right after college, I joined Inventives as a junior software engineer.
        I worked on various projects where my focus was on building performant
        and intuitive UIs that interfaced with a variety of AI models from
        speech-to-text and in reverse, to processing and visualization of large
        datasets.
      </p>
    ),
    icon: CodeXmlIcon,
    startDate: "2021",
    endDate: "2023",
  },
  {
    title: "Web Developer and Director of Citrus Hack",
    description: (
      <p>
        While in college, I joined Citrus Hack, the largest on campus hackathon
        organization as a lead web developer. I was responsible for building and
        maintaining the frontend portal for the hackathon. Eventually, I became
        the director of the organization where my focus was on higher level
        planning and management of the event.
      </p>
    ),
    icon: CitrusIcon,
    startDate: "2020",
    endDate: "2022",
  },
  {
    title: "UCR Residential Technician",
    description: (
      <p>
        My very first job. I helped set up and tear down media events on campus,
        assisted students with technical issues and provided general support for
        the residential community. Overall, an extremely valuable experience
        that developed most of my soft skills.
      </p>
    ),
    icon: MonitorCogIcon,
    startDate: "2019",
    endDate: "2022",
  },
];
