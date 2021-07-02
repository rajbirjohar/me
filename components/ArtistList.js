import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import Artist from './Artist'

export default function TopArtists() {
  const { data } = useSWR('/api/topartists', fetcher)

  if (!data) {
    return null
  } else
    return data.artists.map((artist, index) => (
      <Artist ranking={index + 1} key={artist.artistUrl} {...artist} />
    ))
}
