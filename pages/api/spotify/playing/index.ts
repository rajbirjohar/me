import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "@/lib/spotify";
import { Track } from "types/alpine";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Track>
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false,
      title: "",
      artist: "",
      album: "",
      albumArt: "",
      url: "",
      duration: 0,
      explicit: false,
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({
      isPlaying: false,
      title: "",
      artist: "",
      album: "",
      albumArt: "",
      url: "",
      duration: 0,
      explicit: false,
    });
  }

  const result: Track = {
    title: song.item.name,
    artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
    album: song.item.album.name,
    albumArt: song.item.album.images[0].url,
    url: song.item.external_urls.spotify,
    progress: song.progress_ms,
    duration: song.item.duration_ms,
    explicit: song.item.explicit,
  };

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json(result);
}
