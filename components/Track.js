import Image from 'next/image'
import styles from '@/styles/track.module.css'

export default function Track(track) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <div className={styles.albumArt}>
          <Image
            src={track.albumArt}
            alt="Album Art"
            className={styles.rounded}
            width={75}
            height={75}
            layout="fixed"
          />
        </div>
        <div>
          <p className={`${styles.title} ${'clamp'}`}>
            <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
          </p>
          <p className={`${styles.artist} ${'clamp'}`}>{track.artist}</p>
        </div>
      </div>
    </div>
  )
}
