import type { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "@/lib/spotify";
import { Artist } from "types/alpine";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist[]>
) {
  const response = await getTopArtists();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json([
      {
        artist: "",
        url: "",
        coverArt: "",
      },
    ]);
  }

  const artists = await response.json();

  const result: Artist[] = artists.items.slice(0, 5).map((artist: any) => ({
    artist: artist.name,
    url: artist.external_urls.spotify,
    coverArt: artist.images[1].url,
  }));

  return res.status(200).json(result);
}
