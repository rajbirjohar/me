import Image from 'next/image'
import styles from '@/styles/track.module.css'

export default function Artist(artist) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <div className={styles.albumArt}>
          <Image
            src={artist.artistCover}
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
              href={artist.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.artist}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
