import { LayoutGroup, motion } from "framer-motion";
import css from "./styles.module.css";
import { Photo } from "@/pages/gallery";
import Frame from "./Frame";

export default function Gallery(props: {
  photos: Photo[];
  setPhoto: (photo: Photo | null) => void;
}) {
  const { photos } = props;
  return (
    <div className={css.gallery}>
      <LayoutGroup>
        {photos
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((photo) => (
            <Frame key={photo.name} photo={photo} setPhoto={props.setPhoto} />
          ))}
      </LayoutGroup>
    </div>
  );
}
