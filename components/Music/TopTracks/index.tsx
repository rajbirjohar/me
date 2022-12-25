import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import Track from "@/components/Music/Track";
import css from "./styles.module.css";

export default function TopTracks() {
  const { error, data } = useSWR("/api/spotify/toptracks", fetcher);
  if (error) {
    return <em>Unable to display tracks.</em>;
  }
  if (!data) {
    return <em>Loading...</em>;
  } else {
    return (
      <div className={css.wrapper}>
        <h2>Favorites</h2>
        <div className={css.tracks}>
          {data.tracks.map((track: any, index: any) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
        </div>
      </div>
    );
  }
}
