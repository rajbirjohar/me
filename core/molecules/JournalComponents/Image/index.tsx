import Image from "next/image";
import css from "./styles.module.css";

export default function CustomImage(props: {
  src: string;
  alt: string;
  caption: string;
  priority?: true;
}) {
  return (
    <figure className={css.figure}>
      <Image
        src={props.src}
        alt={props.alt}
        priority={props.priority}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className={css.image}
      />

      <figcaption className={css.caption}>{props.caption}</figcaption>
    </figure>
  );
}
