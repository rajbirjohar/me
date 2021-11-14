import Link from 'next/link'
import { motion } from 'framer-motion'
import { SwatchIcon } from '@/components/Icons/Icons'
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
