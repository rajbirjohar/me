import Image from "next/image";
import css from "./styles.module.css";
import { Artist as ArtistType } from "types/portfolio";

export default function Artist(props: ArtistType) {
  return (
    <li className={css.wrapper}>
      <Image
        src={props.coverArt}
        alt="Album Art"
        width={75}
        height={75}
        priority={true}
        className={css.coverArt}
      />
      <div>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${css.artist} clamp`}
        >
          {props.artist}
        </a>

        <p className={css.description}>Artist</p>
      </div>
    </li>
  );
}
