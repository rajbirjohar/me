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
