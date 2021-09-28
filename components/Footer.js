import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { SwatchIcon } from '@/components/icons/icons'
import styles from '@/styles/footer.module.css'
import { motion } from 'framer-motion'

const ThemeItem = ({ title, value, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      transition={{ ease: 'easeInOut', duration: 0.015 }}
      value={value}
      type="submit"
      className={styles.themeItem}
      onClick={onClick}
    >
      {title}
    </motion.button>
  )
}

const ExtLink = ({ title, destination }) => {
  return (
    <a
      className={styles.external}
      href={destination}
      target="_blank"
      rel="noreferrer noopener"
    >
      {title}
    </a>
  )
}

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const [modify, showModify] = useState(false)
  return (
    <footer className={styles.footer}>
      <hr />
      <h1 className={styles.title}>Elsewhere</h1>
      <div className={styles.actions}>
        <div className={styles.contact}>
          <ExtLink
            title="Github"
            destination="https://github.com/rajbirjohar"
          />
          <ExtLink
            title="LinkedIn"
            destination="https://www.linkedin.com/in/rajbirjohar/"
          />
          <ExtLink
            title="Twitter"
            destination="https://twitter.com/RajbirJohar"
          />
          <Link passHref href="/guestbook">
            <a className={styles.external}>Guestbook</a>
          </Link>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
            onClick={() => showModify(!modify)}
          >
            <SwatchIcon />
            Theme
          </motion.button>
        </div>
      </div>
      {modify && (
        <div>
          {theme !== undefined && (
            <div className={styles.themeWrapper}>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                value="dark"
                type="submit"
                className={styles.themeItem}
                onClick={(e) => setTheme(e.target.value)}
              >
                Dark
              </motion.button> */}
              <ThemeItem
                title="Dark"
                value="dark"
                onClick={(e) => setTheme(e.target.value)}
              />
              <ThemeItem
                title="Light"
                value="light"
                onClick={(e) => setTheme(e.target.value)}
              />
              <ThemeItem
                title="Sepia"
                value="sepia"
                onClick={(e) => setTheme(e.target.value)}
              />
              <ThemeItem
                title="System"
                value="system"
                onClick={(e) => setTheme(e.target.value)}
              />
            </div>
          )}
        </div>
      )}
    </footer>
  )
}
