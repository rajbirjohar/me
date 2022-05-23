import { TablerIcon } from "@tabler/icons";

interface Experience {
  title: string;
  position: string;
  endDate: string | "current";
  startDate: string;
  caption: React.ReactNode | React.ReactNode[];
  icon: TablerIcon;
}

interface Project {
  title: string;
  stars: number;
  pushed: Date;
  url: string;
  description?: string;
  language?: string;
}
