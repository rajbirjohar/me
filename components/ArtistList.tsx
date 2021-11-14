import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Artist from './Artist'
import styles from '@/styles/track.module.css'

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.dummyimage}></div>
      <div className={styles.dummycontent}>
        <p className={styles.dummydescription}></p>
      </div>
    </div>
  )
}

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
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  } else
    return data.artists.map((artist, index) => (
      <Artist ranking={index + 1} key={artist.artistUrl} {...artist} />
    ))
}
