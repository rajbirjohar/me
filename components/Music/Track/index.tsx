import Image from "next/image";
import styles from "../music.module.css";

export default function Track(track: any) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <div className={styles.albumArt}>
          <Image
            src={track.albumArt}
            alt="Album Art"
            className={styles.rounded}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div>
          <p className={`${styles.title} ${"clamp"}`}>
            <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
          </p>
          <p className={`${styles.artist} ${"clamp"}`}>{track.artist}</p>
        </div>
      </div>
    </div>
  );
}
