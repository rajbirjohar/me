import { motion } from 'framer-motion'
import styles from '@/styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, scale: 0.997 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.997 }}
        transition={{ duration: 0.3 }}
        layout="position"
      >
        {children}
      </motion.div>
    </main>
  )
}
