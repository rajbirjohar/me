import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import Track from './Track'

export default function RecentlyPlayedList() {
  const { data } = useSWR('/api/recentlyplayed', fetcher)

  if (!data) {
    return null
  } else
    return data.tracks.map((track, index) => (
      <Track ranking={index + 1} key={track.songUrl} {...track} />
    ))
}
