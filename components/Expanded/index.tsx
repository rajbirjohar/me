import { GalleryImage } from "@/pages/gallery";
import { motion } from "framer-motion";
import Image from "next/image";
import css from "./styles.module.css";

export default function Expanded(props: {
  expanded: GalleryImage | null;
  setExpanded: (expanded: GalleryImage | null) => void;
}) {
  if (props.expanded === null) {
    return <></>;
  }
  return (
    <div className={css.overlay} onClick={() => props.setExpanded(null)}>
      <motion.div layoutId={props.expanded.id} className={css.imagewrapper}>
        <Image
          src={props.expanded.image}
          alt={"Expanded"}
          className={css.image}
        />
      </motion.div>
    </div>
  );
}
