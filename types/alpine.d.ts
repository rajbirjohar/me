import { TablerIcon } from "@tabler/icons";
import { StaticImageData } from "next/image";

interface SubStep {
  title: string;
  range: string;
  caption: string | React.ReactNode;
  icon: TablerIcon;
}

interface Experience {
  title: string;
  month: string;
  year: number;
  caption: string | React.ReactNode;
  icon: TablerIcon;
  url?: string;
  substeps?: SubStep[];
}

interface Featured {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  url: string;
  image: string | StaticImageData;
}

interface Project {
  title: string;
  stars: number;
  pushed: Date;
  url: string;
  description?: string;
  language?: string;
}

interface Track {
  title: string;
  artist: string | string[];
  album: string;
  albumArt: string | StaticImageData;
  url: string;
  progress?: number;
  duration: number;
  explicit: boolean;
  isPlaying?: boolean;
}

interface Artist {
  artist: string;
  url: string;
  coverArt: string;
}
