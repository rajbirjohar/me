import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SwatchIcon } from '@/components/icons/icons'
import styles from '@/styles/footer.module.css'
import { motion } from 'framer-motion'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      type="button"
      className={styles.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      transition={{ ease: 'easeInOut', duration: 0.015 }}
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
                <SwatchIcon />
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
                <SwatchIcon />
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
                <SwatchIcon />
              </svg>
              Dark
            </>
          )}
        </span>
      )}
    </motion.button>
  )
}

export default ThemeChanger
