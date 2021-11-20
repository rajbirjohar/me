import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Track from '@/components/Spotify/Track'
import { LongLoader } from '@/components/Spotify/Loader'

export default function TopTracks() {
  const { error, data } = useSWR('/api/toptracks', fetcher)

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
        <LongLoader />
      </>
    )
  } else
    return data.tracks.map((track, index) => (
      <Track ranking={index + 1} key={track.songUrl} {...track} />
    ))
}
