import styles from '@/styles/layout.module.css'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      layout
      className={styles.main}
    >
      {children}
    </motion.main>
  )
}
