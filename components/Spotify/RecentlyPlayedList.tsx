import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Track from '@/components/Spotify/Track'
import styles from '@/styles/track.module.css'

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.dummyimage}></div>
      <div className={styles.dummycontent}>
        <p className={styles.dummytitle}></p>
      </div>
    </div>
  )
}

export default function RecentlyPlayedList() {
  const { error, data } = useSWR('/api/recentlyplayed', fetcher)

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
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  } else
    return data.tracks.map((track, index) => (
      <Track ranking={index + 1} key={track.songUrl} {...track} />
    ))
}
