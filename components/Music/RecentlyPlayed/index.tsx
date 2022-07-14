import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Track from "@/components/Music/Track";
import styles from "../music.module.css";

export default function RecentlyPlayed() {
  const { error, data } = useSWR("/api/spotify/recentlyplayed", fetcher);

  if (error) {
    return (
      <p>
        Hmm. Spotify does not seem to be working right now. If this persists
        please let me know.
      </p>
    );
  }
  if (!data) {
    return <em>Loading...</em>;
  } else
    return (
      <>
        <h2 className={styles.intro}>Recents</h2>
        <ul className={styles.recentlyPlayed}>
          {data.tracks.map((track: any, index: any) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
        </ul>
      </>
    );
}
