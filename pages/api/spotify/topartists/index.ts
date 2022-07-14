import type { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "@/lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 3).map((artist: any) => ({
    artist: artist.name,
    artistUrl: artist.external_urls.spotify,
    artistCover: artist.images[1].url,
  }));

  return res.status(200).json({ artists });
}
