import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import photo1 from "/public/photo1.jpg";
import photo2 from "/public/photo2.jpg";
import photo3 from "/public/photo3.jpg";
import css from "./styles.module.css";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Expanded from "@/components/Expanded";
import { useDisableScroll } from "../../hooks/useDisableScroll";
import { motion } from "framer-motion";

export interface GalleryImage {
  id: string;
  image: string | StaticImageData;
  alt: string;
}

const galleryData: GalleryImage[] = [
  {
    id: "1",
    image: photo1,
    alt: "Image of Tricia at Schnep Farms",
  },
  {
    id: "2",
    image: photo2,
    alt: "Image of the inside of a tree trunk",
  },
  {
    id: "3",
    image: photo3,
    alt: "Image of Horse Shoe Bend",
  },
  {
    id: "4",
    image: photo1,
    alt: "Image of Tricia at Schnep Farms 2",
  },
  {
    id: "5",
    image: photo2,
    alt: "Image of the inside of a tree trunk 2",
  },
  {
    id: "6",
    image: photo3,
    alt: "Image of Horse Shoe Bend 2",
  },
];

const Gallery: NextPage = () => {
  const [expanded, setExpanded] = useState<GalleryImage | null>(null);
  useDisableScroll(expanded !== null);
  return (
    <Page>
      <Head>
        <title>Rajbir Johar | Gallery</title>
      </Head>
      <section>
        <Heading
          title={"Gallery"}
          subtitle="A glimpse of how I see the world."
        />
        <Expanded expanded={expanded} setExpanded={setExpanded} />
        <div className={css.gallery}>
          {galleryData.map((image) => (
            <motion.div
              layoutId={image.id}
              key={image.alt}
              className={
                expanded === null
                  ? css.imagewrapper
                  : `${css.imagewrapper} ${css.expanded}`
              }
              role="button"
              onClick={() => setExpanded(expanded === null ? image : null)}
            >
              <Image
                width={0}
                height={0}
                src={image.image}
                alt={image.alt}
                className={css.image}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Gallery;
