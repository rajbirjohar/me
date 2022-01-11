import React, { useState } from 'react'
import Link from 'next/link'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuButton } from './MenuButton'
import styles from '@/styles/header.module.css'

const list = {
  closed: {
    opacity: 0,
    transition: {
      type: 'tween',
      staggerChildren: 0.05,
    },
  },
  open: {
    opacity: 1,
    transition: {
      type: 'tween',
      staggerChildren: 0.1,
    },
  },
}

const listItem = {
  closed: {
    opacity: 0,
    x: -5,
    transition: {
      type: 'tween',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
    },
  },
}

const NavLink = ({ title, path, setIsOpen, isOpen }) => {
  const [blockScroll, allowScroll] = useScrollBlock()
  const openNav = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      allowScroll()
    } else {
      blockScroll()
    }
  }
  return (
    <motion.li variants={listItem} onClick={openNav}>
      <Link href={path}>{title}</Link>
    </motion.li>
  )
}

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.mobilenav}>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        strokeWidth="4"
        color="var(--mono-900)"
        lineProps={{ strokeLinecap: 'round' }}
        transition={{ type: 'tween', duration: 0.4 }}
        width="24"
        height="15"
        className={styles.hamburger}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobilenavlist}
            variants={list}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavLink
              title="Home"
              path="/"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
            <motion.li variants={listItem} onClick={() => setIsOpen(!isOpen)}>
              <Link href="/projects">Projects</Link>
            </motion.li>
            <motion.li variants={listItem} onClick={() => setIsOpen(!isOpen)}>
              <Link href="/experiences">Experiences</Link>
            </motion.li>
            <motion.li variants={listItem} onClick={() => setIsOpen(!isOpen)}>
              <Link href="/music">Music</Link>
            </motion.li>
            <motion.li variants={listItem} onClick={() => setIsOpen(!isOpen)}>
              <Link href="/guestbook">Guestbook</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
