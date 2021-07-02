import styles from '@/styles/layout.module.css'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.998 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.998 }}
      transition={{ duration: 0.15 }}
      layout="position"
      className={styles.main}
    >
      {children}
    </motion.main>
  )
}
