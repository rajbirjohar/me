import Image from "next/image";
import css from "./styles.module.css";
import { Track as TrackType } from "types/alpine";

export default function Track(props: TrackType) {
  return (
    <div className={css.wrapper}>
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
          <div className={`${css.heading} clamp`}>
            <a
              className={`${css.title} clamp`}
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.title}{" "}
              {props.explicit && <span className={css.explicit}>E</span>}
            </a>
          </div>
          <p className={`${css.artist} clamp`}>{props.artist}</p>
        </div>
      </div>
    </div>
  );
}
