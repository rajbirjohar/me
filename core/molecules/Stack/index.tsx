import Image, { StaticImageData } from "next/image";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import css from "./styles.module.css";
import { useState, DragEventHandler } from "react";

const MotionImage = motion(Image);

interface Card {
  id: number;
  alt: string;
  image: string | StaticImageData;
}

function Card(props: {
  index: number;
  card: Card;
  onDragEnd: DragEventHandler<HTMLImageElement> &
    ((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void);
  length: number;
}) {
  const { card } = props;

  return (
    <MotionImage
      alt={card.alt}
      src={card.image}
      className={
        props.index === 0 ? `${css.image} ${css.front}` : `${css.image}`
      }
      style={{
        rotate: `${props.index % 2 === 0 ? 6 : -6}deg`,
      }}
      onDragEnd={props.onDragEnd}
      initial={{
        scale: 1,
      }}
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragSnapToOrigin
      animate={{
        scale: 1,
        rotate: `${props.index % 2 === 0 ? 6 : -6}deg`,
        zIndex: props.length - props.index,
      }}
    />
  );
}

export default function Stack(props: { cardStack: Card[] }) {
  const [cards, setCards] = useState<Card[]>(props.cardStack);

  const move = (array: Card[], moveIndex: number, toIndex: number) => {
    /** Moves an array item from one position in an array to another.
     * Note: This is a pure function so a new array will be returned, instead
     * of altering the array argument.
     */
    const item = array[moveIndex];
    const length = array.length;
    const diff = moveIndex - toIndex;

    if (diff > 0) {
      // move left
      return [
        ...array.slice(0, toIndex),
        item,
        ...array.slice(toIndex, moveIndex),
        ...array.slice(moveIndex + 1, length),
      ];
    } else if (diff < 0) {
      // move right
      const targetIndex = toIndex + 1;
      return [
        ...array.slice(0, moveIndex),
        ...array.slice(moveIndex + 1, targetIndex),
        item,
        ...array.slice(targetIndex, length),
      ];
    }
    return array;
  };

  const rotateCards = (from: number) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className={css.stack}>
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card
            index={index}
            key={card.id}
            card={card}
            onDragEnd={() => rotateCards(index)}
            length={cards.length}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
