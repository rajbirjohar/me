import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import styles from '@/styles/track.module.css'

export default function NowPlaying() {
  const { data } = useSWR('/api/nowplaying', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <div className={styles.nowplaying}>
          <div className={styles.nowplaying}>
            <div className={styles.info}>
              <div className={styles.albumArt}>
                <Image
                  src={data?.albumArt}
                  alt="Album Art"
                  className={styles.rounded}
                  width={75}
                  height={75}
                  layout="fixed"
                />
              </div>
              <div>
                <p className={`${styles.title} ${'clamp'}`}>
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data?.title}
                  </a>
                </p>
                <p className={`${styles.artist} ${'clamp'}`}>{data?.artist}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nowplaying}>
          <div className={styles.info}>
            <div className={styles.albumArt}>
              <Image
                src="/assets/spotify.png"
                alt="Spotify Logo"
                className={styles.rounded}
                width={75}
                height={75}
              />
            </div>
            <div>
              <p className={`${styles.title} ${'clamp'}`}>
                Not currently playing
              </p>
              <p className={`${styles.artist} ${'clamp'}`}>Spotify</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
