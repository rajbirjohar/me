import Link from 'next/link'
import ThemeChanger from '@/components/Theme'
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
          <ExtLink title="Github" destination="https://github.com/r-jo" />
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
        <ThemeChanger />
      </div>
    </footer>
  )
}
