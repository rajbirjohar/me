import fetcher from "@/lib/fetcher";
import css from "./styles.module.css";
import useSWR from "swr";
import { Artist } from "types/alpine";
import Image from "next/image";
import Link from "next/link";

export default function TopArtists() {
  const { data, error } = useSWR("/api/spotify/topartists", fetcher);
  if (error) {
    return <em>Unable to display artists.</em>;
  }
  if (!data) {
    return <em>Loading</em>;
  }
  return (
    <div className={css.section}>
      <h2>Who I&#39;m Listening To</h2>
      <div className={css.artists}>
        {data
          .map((artist: Artist, index: any) => (
            <Link key={artist.artist} href={artist.url} className={css.artist}>
              <Image
                alt={artist.artist}
                src={artist.coverArt}
                className={css.image}
                fill
              />
            </Link>
          ))
          // Reverse is needed because the
          // order is reversed with CSS to acheive
          // the overlapping effect
          .reverse()}
      </div>
    </div>
  );
}
