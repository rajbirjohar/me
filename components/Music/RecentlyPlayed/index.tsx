import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Track from "@/components/Music/Track";
import css from "../Track/styles.module.css";

export default function RecentlyPlayed() {
  const { error, data } = useSWR("/api/spotify/recentlyplayed", fetcher);

  if (error) {
    return (
      <>
        <em>How unfortunate. Spotify broke.</em>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <em>Loading...</em>
      </>
    );
  } else
    return (
      <div className={css.tracks}>
        <h3>Recent</h3>
        {data.tracks.map((track: any, index: any) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </div>
    );
}
