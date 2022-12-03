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
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <h3 className={`${css.artist} clamp`}>{props.artist}</h3>
        <p className={css.description}>Artist</p>
      </div>
    </a>
  );
}
