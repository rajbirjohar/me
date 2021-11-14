import styles from '@/styles/projects.module.css'
import { StarIcon } from '@/components/Icons/Icons'

export default function ProjectCard({
  name,
  desc,
  star_count,
  pushed_date,
  href,
  language,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.group}
    >
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{name}</p>
          <p className={styles.stars}>
            {star_count}
            <StarIcon />
          </p>
        </div>

        <p className={styles.description}>{desc}</p>
        <p className={styles.date}>Last edited {pushed_date}</p>
        <span className={styles.language}>{language}</span>
      </div>
    </a>
  )
}
