import type { NextApiRequest, NextApiResponse } from 'next'
import { getRecentlyPlayed } from '@/lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getRecentlyPlayed()
  const { items } = await response.json()

  const tracks = items.slice(1, 10).map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.track.external_urls.spotify,
    title: track.track.name,
    albumArt: track.track.album.images[1].url,
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks })
}
