import { getTopArtists } from '@/lib/spotify'

const topArtists = async (_, res) => {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items.slice(0, 5).map((artist) => ({
    artist: artist.name,
    artistUrl: artist.external_urls.spotify,
    artistCover: artist.images[1].url,
  }))

  return res.status(200).json({ artists })
}

export default topArtists
