import { motion } from 'framer-motion'
import styles from '@/styles/projects.module.css'
import { StarIcon } from '@/components/Icons'

const listItems = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function ProjectCard({
  name,
  desc,
  star_count,
  pushed_date,
  href,
  language,
}) {
  return (
    <motion.div variants={listItems} layout="position">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.group}
        layout
      >
        <div className={styles.card}>
          <div>
            <div className={styles.titleWrapper}>
              <span className={styles.title}>{name}</span>
              <span className={styles.stars}>
                {star_count}
                <StarIcon />
              </span>
            </div>
            <p className={styles.description}>{desc}</p>
          </div>
          <span>
            {language && <span className={styles.language}>{language}</span>}{' '}
            <span className={styles.date}>• {pushed_date}</span>
          </span>
        </div>
      </motion.a>
    </motion.div>
  )
}
