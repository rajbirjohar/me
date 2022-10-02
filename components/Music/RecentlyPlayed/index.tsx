import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Track from "@/components/Music/Track";
import css from "../Track/styles.module.css";

export default function RecentlyPlayed() {
  const { error, data } = useSWR("/api/spotify/recentlyplayed", fetcher);

  if (error) {
    return (
      <>
        <h2 className={css.intro}>Recents</h2>
        <em>How unfortunate. Spotify broke.</em>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <h2 className={css.intro}>Recents</h2>
        <em>Loading...</em>
      </>
    );
  } else
    return (
      <>
        <h2 className={css.intro}>Recents</h2>
        <ul className={css.recentlyPlayed}>
          {data.tracks.map((track: any, index: any) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
        </ul>
      </>
    );
}
