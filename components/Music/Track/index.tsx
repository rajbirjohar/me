import Image from "next/image";
import css from "./styles.module.css";
import { Track as TrackType } from "types/portfolio";

export default function Track(props: TrackType) {
  return (
    <div className={css.wrapper}>
      <div className={css.track}>
        <div className={css.albumArt}>
          <Image
            src={props.albumArt}
            alt="Album Art"
            className={css.rounded}
            width={75}
            height={75}
            layout="fixed"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className={css.info}>
          {props.progress && (
            <div
              className={css.progress + " " + css.secondary}
              style={{
                width: `${(props.progress / props.duration ?? 0) * 100}%`,
              }}
            />
          )}
          <div className={css.heading}>
            <a
              className={`${css.title} ${"clamp"}`}
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.title}{" "}
              {props.explicit && <span className={css.explicit}>E</span>}
            </a>
          </div>
          <p className={`${css.artist} ${"clamp"}`}>{props.artist}</p>
        </div>
      </div>
    </div>
  );
}
