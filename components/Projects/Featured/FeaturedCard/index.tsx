import { IconArrowUpRight } from "@tabler/icons";
import { motion, Variants } from "framer-motion";
import { Featured } from "types/portfolio";
import css from "./styles.module.css";
import Image from "next/image";

export default function FeaturedCard(props: { featured: Featured }) {
  return (
    <a
      href={props.featured.url}
      target="_blank"
      rel="noreferrer noopener"
      className={css.action}
    >
      <div className={css.wrapper}>
        {props.featured.image && (
          <div className={css.imagewrapper}>
            <Image
              src={props.featured.image}
              alt="Thumbnail"
              className={css.image}
            />
          </div>
        )}

        <div className={css.content}>
          <h3 className={css.title}>
            {props.featured.title}{" "}
            <IconArrowUpRight width={20} height={20} strokeWidth={2.5} />
          </h3>
          <div className={css.description}>{props.featured.description}</div>
        </div>
        <svg
          id="layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386 49"
          className={css.background}
        >
          <path d="M385,1c-48,0-48,30-96,30S241,1,192.99,1s-48,30-96,30S49,1,1,1V48H385V1Z" />
        </svg>
        <svg
          id="layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386 33"
          className={css.background2}
        >
          <path d="M385,1c-48,0-48,14-96,14S241,1,192.99,1c-2.82,0-5.48,.05-7.99,.14-40.17,1.46-42.83,13.86-88,13.86C49,15,49,1,1,1v31H385V1Z" />
        </svg>
      </div>
    </a>
  );
}
