import { useState, useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { useTheme } from 'next-themes'
import styles from '@/styles/footer.module.css'
import { MoonIcon, SunIcon, SepiaIcon } from '@/components/icons/icons'
import TimeAgo from 'react-timeago'

const ExtLink = ({ title, destination }) => {
  return (
    <p className={styles.external}>
      <a href={destination}>{title}</a>
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
  const { data } = useSWR('/api/github', fetcher)
  const loading = !data
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
        {loading ? (
          <p className={styles.edited}>
            Created by a human on Earth <br />
            Finding out when this was last edited...
          </p>
        ) : (
          <p className={styles.edited}>
            Created by a human on Earth <br />
            Lasted edited about <TimeAgo date={data.portfolioLastUpdated} />
          </p>
        )}
      </div>
    </footer>
  )
}
