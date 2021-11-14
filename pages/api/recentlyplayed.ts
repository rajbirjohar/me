import { getRecentlyPlayed } from '@/lib/spotify'

const recentlyPlayed = async (_, res) => {
  const response = await getRecentlyPlayed()
  const { items } = await response.json()

  const tracks = items.slice(1, 10).map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.track.external_urls.spotify,
    title: track.track.name,
    albumArt: track.track.album.images[1].url,
  }))

  return res.status(200).json({ tracks })
}

export default recentlyPlayed
