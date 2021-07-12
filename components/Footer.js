import ThemeChanger from '@/components/Theme'
import styles from '@/styles/footer.module.css'

const ExtLink = ({ title, destination }) => {
  return (
    <p className={styles.external}>
      <a href={destination} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </p>
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
        </div>
        <ThemeChanger />
      </div>
    </footer>
  )
}
