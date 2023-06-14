"use client";

import { AnimatePresence, LayoutGroup, Variants, motion } from "framer-motion";
import styles from "./styles.module.scss";
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

  useEffect(() => {
    window.sessionStorage.setItem("load", "true");
  }, []);

  return (
    <div className={styles.wrapper}>
      <motion.h1
        className={styles.hello}
        data-nosnippet
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
            duration: 0.6,
            delay: 0.4,
          },
        }}
      >
        <LayoutGroup id="hello">
          <AnimatePresence mode="wait">
            <motion.span
              className={styles.greeting}
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
          <motion.span
            layout="position"
            layoutId="name"
            className={styles.name}
          >
            I&#39;m Rajbir.
          </motion.span>
        </LayoutGroup>
      </motion.h1>
      <motion.h2
        className={styles.subtitle}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }}
      >
        Engineer / Designer
      </motion.h2>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Hello), {
  ssr: false,
});
