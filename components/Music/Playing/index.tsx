import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import css from "./styles.module.css";
import Track from "../Track";

export default function Playing() {
  const { data, error } = useSWR("/api/spotify/playing", fetcher, {
    refreshInterval: 5000,
  });

  if (error) {
    return (
      <div className={css.wrapper}>
        <h3>Listening to</h3>
        <Track
          title={"Unable to play"}
          artist={"–––"}
          album={"–––"}
          albumArt={"/static/images/spotify.png"}
          url={"https://rajbir.io"}
          duration={0}
          explicit={false}
        />
      </div>
    );
  }
  if (!data) {
    return (
      <div className={css.wrapper}>
        <h3>Listening to</h3>
        <Track
          title={"Loading..."}
          artist={"–––"}
          album={"–––"}
          albumArt={"/static/images/spotify.png"}
          url={"https://rajbir.io"}
          duration={0}
          explicit={false}
        />
      </div>
    );
  }
  return (
    <div className={css.wrapper}>
      <h3 className={css.intro}>Listening to</h3>
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
          albumArt={"/static/images/spotify.png"}
          url={"https://rajbir.io"}
          duration={0}
          explicit={false}
        />
      )}
    </div>
  );
}
