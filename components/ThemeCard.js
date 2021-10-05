import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import styles from '@/styles/theme.module.css'

const ThemeCard = ({ title, value }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {theme !== undefined && (
        <button
          className={styles.themeItem}
          value={theme}
          onClick={(e) => setTheme(value)}
        >
          <h1>{title}</h1>
          {/* <div className={styles.swatchWrapper}>
            <span className={styles.swatch1}></span>
            <span className={styles.swatch2}></span>
            <span className={styles.swatch3}></span>
            <span className={styles.swatch4}></span>
          </div> */}
        </button>
      )}
    </>
  )
}

export default ThemeCard
