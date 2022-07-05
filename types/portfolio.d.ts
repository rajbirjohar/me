import { TablerIcon } from "@tabler/icons";

interface Experience {
  title: string;
  position?: string;
  range?: string;
  year: number;
  caption: string;
  icon: TablerIcon;
  url?: string;
}

interface Project {
  title: string;
  stars: number;
  pushed: Date;
  url: string;
  description?: string;
  language?: string;
}
