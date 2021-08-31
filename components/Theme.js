import { useTheme } from 'next-themes'
import { SwatchIcon } from '@/components/icons/icons'
import styles from '@/styles/footer.module.css'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.selectWrapper}>
      <SwatchIcon />
      {theme !== undefined && (
        <select
          className={styles.select}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option className={styles.option} value="dark">
            Dark
          </option>
          <option className={styles.option} value="light">
            Light
          </option>
          <option className={styles.option} value="sepia">
            Sepia
          </option>
          <option className={styles.option} value="system">
            System
          </option>
        </select>
      )}
    </div>
  )
}

export default ThemeChanger
