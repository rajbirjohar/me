import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Artist from "@/components/Music/Artist";
import css from "./styles.module.css";
import { Artist as ArtistType } from "types/portfolio";

export default function TopArtists() {
  const { error, data } = useSWR("/api/spotify/topartists", fetcher);
  if (error) {
    return (
      <>
        <h2 className={css.intro}>Favorites</h2>
        <em>How unfortunate. Spotify broke.</em>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <h2 className={css.intro}>Favorites</h2>
        <em>Loading...</em>
      </>
    );
  } else
    return (
      <>
        <h2 className={css.intro}>Favorites</h2>
        <ul className={css.topArtists}>
          {data.map((artist: ArtistType) => (
            <Artist
              key={artist.artist}
              artist={artist.artist}
              url={artist.url}
              coverArt={artist.coverArt}
            />
          ))}
        </ul>
      </>
    );
}
