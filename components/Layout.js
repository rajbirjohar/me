import styles from '@/styles/layout.module.css'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        layout="position"
      >
        {children}
      </motion.div>
    </main>
  )
}
