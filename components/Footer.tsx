import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SwatchIcon } from '@/components/Icons'
import styles from '@/styles/footer.module.css'

const ExtLink = ({ title, destination }) => {
  return (
    <a href={destination} target="_blank" rel="noreferrer noopener">
      {title}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
        </div>
        <div>
          <p className={styles.status}>Exploring.</p>
        </div>
      </div>
    </footer>
  )
}
