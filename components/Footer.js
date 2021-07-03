import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from '@/styles/footer.module.css'
import { MoonIcon, SunIcon, SepiaIcon } from '@/components/icons/icons'

const ExtLink = ({ title, destination }) => {
  return (
    <p className={styles.external}>
      <a href={destination} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </p>
  )
}

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={styles.button}
      onClick={() =>
        setTheme(
          resolvedTheme === 'dark'
            ? 'sepia'
            : resolvedTheme === 'sepia'
            ? 'light'
            : 'dark'
        )
      }
    >
      {mounted && (
        <span>
          {resolvedTheme === 'dark' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <SepiaIcon />
              </svg>
              Sepia
            </>
          ) : resolvedTheme === 'sepia' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <SunIcon />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <MoonIcon />
              </svg>
              Dark
            </>
          )}
        </span>
      )}
    </button>
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
      <div>
        <p className={styles.last}>Created by a human on Earth </p>
      </div>
    </footer>
  )
}
