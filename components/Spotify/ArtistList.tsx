import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Artist from '@/components/Spotify/Artist'
import { Loader } from '@/components/Spotify/Loader'

export default function TopArtists() {
  const { error, data } = useSWR('/api/topartists', fetcher)
  if (error) {
    return (
      <p>
        Hmm. Spotify does not seem to be working right now. If this persists
        please let me know.
      </p>
    )
  }
  if (!data) {
    return (
      <>
        <Loader />
      </>
    )
  } else
    return data.artists.map((artist, index) => (
      <Artist ranking={index + 1} key={artist.artistUrl} {...artist} />
    ))
}
