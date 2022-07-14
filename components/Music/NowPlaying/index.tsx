import Image from "next/image";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import styles from "../music.module.css";

export default function NowPlaying() {
  const { data } = useSWR("/api/spotify/nowplaying", fetcher);

  return (
    <>
      <h2 className={styles.intro}>Listening to</h2>
      {data?.songUrl ? (
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
              <p className={`${styles.title} ${"clamp"}`}>
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.title}
                </a>
              </p>
              <p className={`${styles.artistName} ${"clamp"}`}>{data?.artist}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nowplaying}>
          <div className={styles.info}>
            <div className={styles.albumArt}>
              <Image
                src="/spotify.png"
                alt="Spotify Logo"
                className={styles.rounded}
                width={75}
                height={75}
              />
            </div>
            <div>
              <p className={`${styles.placeholder} ${"clamp"}`}>
                Not currently playing
              </p>
              <p className={`${styles.artistName} ${"clamp"}`}>Spotify</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
