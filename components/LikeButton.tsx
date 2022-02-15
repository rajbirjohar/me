import { useLikes } from '@/hooks/useLikes'
import { motion } from 'framer-motion'
import React from 'react'
import { HeartIcon } from './Icons'
import styles from '@/styles/index.module.css'

const emojis = ['👍', '🙏', '🥰', '❤️', '🥳', '😆', '✌️', '😎', '🎉', '🤪']

// A visual component that...
// 1. Fills a heart shape with a gradient depending on the number of likes passed
// 2. Animates a thank you emoji as the number of likes increase
export const LikeButton = () => {
  const { currentUserLikes, likes, isLoading, increment } = useLikes()

  let [animatedEmojis, setAnimatedEmojis] = React.useState<string[]>(
    currentUserLikes ? [emojis[currentUserLikes]] : []
  )

  const handleClick = () => {
    increment()
    if (currentUserLikes && currentUserLikes <= 9) {
      setAnimatedEmojis([...animatedEmojis, emojis[currentUserLikes]])
    }
  }

  return (
    <div className={styles.likewrapper}>
      <div className={styles.inner}>
        {animatedEmojis.map((emoji, index) => {
          return (
            <motion.span key={index} className={styles.emoji}>
              {emoji}
            </motion.span>
          )
        })}
        <motion.button
          className={styles.button}
          onClick={handleClick}
          whileHover="hover"
          whileTap="active"
          variants={{
            hover: {
              scale: 1.1,
            },
            active: {
              scale: 1,
            },
          }}
        >
          <motion.div
            className={styles.gradient}
            animate={String(currentUserLikes)}
            // Move gradient up or down depending on number of likes
            variants={{
              // 0 likes
              '0': { translateY: 40 },
              // 1 like etc
              '1': { translateY: 35 },
              '2': { translateY: 30 },
              '3': { translateY: 25 },
              '4': { translateY: 20 },
              '5': { translateY: 15 },
              '6': { translateY: 10 },
              '7': { translateY: 5 },
              '8': { translateY: 3 },
              '9': { translateY: 1 },
              '10': { translateY: 0 },
            }}
            initial="0"
          />
          <svg className={styles.icon}>
            <HeartIcon />
          </svg>
        </motion.button>
      </div>
      <div>
        {isLoading ? (
          <span className={styles.dots}>
            <span className={styles.dot}>&bull;</span>
            <span className={styles.dot}>&bull;</span>
            <span className={styles.dot}>&bull;</span>
          </span>
        ) : (
          <span className={styles.likes}>{likes}</span>
        )}
      </div>
    </div>
  )
}
