import '@theme-toggles/react/css/Expand.css'
import { Expand } from '@theme-toggles/react'
import { useTheme } from 'next-themes'
import styles from '@/styles/header.module.css'

export default function Theme() {
  const { theme, setTheme } = useTheme()
  return (
    <Expand
      duration={500}
      className={styles.theme}
      onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}
