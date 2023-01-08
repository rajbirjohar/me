import Image from "next/image";
import css from "./styles.module.css";
import { Track as TrackType } from "types/alpine";

export default function Track(props: TrackType) {
  return (
    <a
      href={props.url}
      className={css.wrapper}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={props.albumArt}
        alt="Album Art"
        className={css.backgroundArt}
        fill
        priority={true}
      />

      <div className={css.track}>
        <Image
          src={props.albumArt}
          alt="Album Art"
          className={css.albumArt}
          width={75}
          height={75}
          priority={true}
        />

        <div className={css.info}>
          <div className={css.heading}>
            <h3 className={`${css.title} clamp`}>{props.title}</h3>
            <p className={`${css.artist} clamp`}>{props.artist}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
