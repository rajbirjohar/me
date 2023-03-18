import Image from "next/image";

export default function CustomImage(props: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  breakout?: true;
  priority?: true;
}) {
  return (
    <div>
      <figure>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
          priority={props.priority}
        />
        {props.caption && <figcaption>{props.caption}</figcaption>}
      </figure>
    </div>
  );
}
