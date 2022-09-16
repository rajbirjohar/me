import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import css from "./styles.module.css";
import Track from "../Track";

export default function NowPlaying() {
  const { data, error } = useSWR("/api/spotify/nowplaying", fetcher, {
    refreshInterval: 5000,
  });

  if (error) {
    return (
      <em>
        How unfortunate. Spotify broke.
        <br />
      </em>
    );
  }
  if (!data) {
    return <em>Loading...</em>;
  }
  return (
    <>
      <h2 className={css.intro}>Listening to</h2>
      {data.url ? (
        <Track
          title={data.title}
          artist={data.artist}
          album={data.album}
          albumArt={data.albumArt}
          url={data.url}
          duration={0}
          // progress={data.progress}
          explicit={data.explicit}
        />
      ) : (
        <Track
          title={"Not currently playing"}
          artist={"Spotify"}
          album={"Spotify"}
          albumArt={"/spotify.png"}
          url={""}
          duration={0}
          explicit={false}
        />
      )}
    </>
  );
}
