import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SwatchIcon } from '@/components/Icons'
import styles from '@/styles/footer.module.css'

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
  // Hit Counter
  // I use a useEffect so that this function only runs
  // once since I set an empty dependency array (It does
  // not run/depend on any values).
  // I placed this in the footer since I only want it to
  // run once on initial visit (and reload) but not when
  // visiting other pages (then going back). The footer is
  // rendered only once.
  useEffect(() => {
    sendData()
  }, [])

  const sendData = async () => {
    const response = await fetch('/api/hitcount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    const data = await response.json()
    return data
  }

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
          <Link passHref href="/theme">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <SwatchIcon />
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
