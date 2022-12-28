import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import css from "./styles.module.css";
import { Photo } from "@/pages/gallery";

const MotionImage = motion(Image);

export default function Expanded(props: {
  photo: Photo | null;
  setPhoto: (expanded: Photo | null) => void;
}) {
  const { photo } = props;
  const wrapper: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.15,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
        type: "tween",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {photo !== null && (
        <motion.div
          className={css.overlay}
          onClick={() => props.setPhoto(null)}
          key={photo.name}
          variants={wrapper}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div className={css.imagewrapper}>
            <MotionImage
              layoutId={photo.name}
              quality={100}
              width={500}
              height={500}
              src={photo.url}
              alt={"Expanded"}
              className={css.image}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
