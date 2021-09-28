import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { SwatchIcon } from '@/components/icons/icons'
import styles from '@/styles/footer.module.css'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [modify, showModify] = useState(false)

  return (
    <div>
      <a className={styles.button} onClick={() => showModify(!modify)}>
        <SwatchIcon />
        Theme
      </a>
      {modify && (
        <div>
          {theme !== undefined && (
            <div className={styles.themeWrapper}>
              <button
                value="dark"
                type="submit"
                className={styles.themeItem}
                onClick={(e) => setTheme(e.target.value)}
              >
                Dark
              </button>
              <button
                value="light"
                type="submit"
                onClick={(e) => setTheme(e.target.value)}
              >
                Light
              </button>
              <button
                value="sepia"
                type="submit"
                onClick={(e) => setTheme(e.target.value)}
              >
                Sepia
              </button>
              <button
                value="system"
                type="submit"
                onClick={(e) => setTheme(e.target.value)}
              >
                System
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ThemeChanger
