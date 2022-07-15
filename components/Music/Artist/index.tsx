import Image from "next/image";
import css from "./styles.module.css";
import { Artist as ArtistType } from "types/portfolio";

export default function Artist(props: ArtistType) {
  return (
    <a
      className={css.wrapper}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={css.coverArt}>
        <Image
          src={props.coverArt}
          alt="Album Art"
          className={css.rounded}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <p className={`${css.artist} ${"clamp"}`}>{props.artist}</p>
        <p className={css.description}>Artist</p>
      </div>
    </a>
  );
}
