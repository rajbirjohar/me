import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Artist from "@/components/Music/Artist";
import styles from "../music.module.css";

export default function TopArtists() {
  const { error, data } = useSWR("/api/spotify/topartists", fetcher);
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
        <h2 className={styles.intro}>Favorites</h2>
        <ul className={styles.topArtists}>
          {data.artists.map((artist: any, index: number) => (
            <Artist ranking={index + 1} key={artist.artistUrl} {...artist} />
          ))}
        </ul>
      </>
    );
}
