import Image from "next/image";
import styles from "../music.module.css";

export default function Artist(artist: any) {
  return (
    <a
      className={styles.artist}
      href={artist.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.artistArt}>
        <Image
          src={artist.artistCover}
          alt="Album Art"
          className={styles.rounded}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <p className={`${styles.artistUrl} ${"clamp"}`}>{artist.artist}</p>
      </div>
    </a>
  );
}
