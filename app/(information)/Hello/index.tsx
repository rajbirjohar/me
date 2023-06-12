"use client";

import { AnimatePresence, LayoutGroup, Variants, motion } from "framer-motion";
import css from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "你好",
  "こんにちは",
  "Hallo",
  "Привет",
  "Ciao",
  "안녕하세요",
  "أهلا",
  "สวัสดี",
  "Hallå",
  "Hej",
  "Xin chào",
  "Witam",
  "Hei",
  "שלום",
  "γεια",
  "Buna ziua",
  "Helló",
  "Ahoj",
  "Zdravo",
  "नमस्ते",
  "Сәлеметсіз бе",
  "Здравейте",
];

const Hello = () => {
  const hello: Variants = {
    initial: {
      opacity: 0,
      width: "auto",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    animate: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      width: "auto",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
  };

  const [index, setIndex] = useState(
    Math.floor(Math.random() * greetings.length)
  );

  const handleNext = useCallback(() => {
    const idx = true ? 0 : index;
    setIndex(index + 1 === greetings.length ? idx : index + 1);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <h1 className={css.hello} data-nosnippet>
      <LayoutGroup id="hello">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            className={css.greeting}
            key={greetings[index]}
            variants={hello}
            initial="initial"
            animate="animate"
            exit="exit"
            layoutId="greeting"
            layout="preserve-aspect"
          >
            <motion.span layout>{greetings[index]}.&nbsp;</motion.span>
          </motion.span>
        </AnimatePresence>
        <motion.span layout="position" layoutId="name" className={css.name}>
          I&#39;m Rajbir.
        </motion.span>
      </LayoutGroup>
    </h1>
  );
};

export default dynamic(() => Promise.resolve(Hello), {
  ssr: false,
});
