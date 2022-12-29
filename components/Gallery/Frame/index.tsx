import { Photo } from "@/pages/gallery";
import { motion } from "framer-motion";
import css from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";

const MotionImage = motion(Image);

export default function Frame(props: {
  photo: Photo;
  setPhoto: (photo: Photo | null) => void;
}) {
  const { photo } = props;
  const [loading, setLoading] = useState(true);
  return (
    <motion.div
      key={photo.name}
      className={css.imagewrapper}
      role="button"
      onClick={() => props.setPhoto(photo)}
    >
      <MotionImage
        layoutId={photo.name}
        width={200}
        height={200}
        src={photo.url}
        alt={"photo"}
        className={loading ? css.loading : css.image}
        onLoadingComplete={() => setLoading(false)}
      />
    </motion.div>
  );
}
