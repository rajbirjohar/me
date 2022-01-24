import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuButton } from './MenuButton'
import styles from '@/styles/header.module.css'
import { useScrollLock } from '@mantine/hooks'

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

const NavLink = ({ title, path, openNav }) => {
  return (
    <motion.li variants={listItem} onClick={openNav}>
      <Link href={path}>{title}</Link>
    </motion.li>
  )
}

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const openNav = () => {
    setIsOpen(!isOpen)
    setScrollLocked(!scrollLocked)
  }

  return (
    <nav className={styles.mobilenav}>
      <MenuButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen)
          setScrollLocked(!scrollLocked)
        }}
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
            <NavLink title="Home" path="/" openNav={openNav} />
            <NavLink title="Projects" path="/projects" openNav={openNav} />
            <NavLink
              title="Experiences"
              path="/experiences"
              openNav={openNav}
            />
            <NavLink title="Music" path="/music" openNav={openNav} />
            <NavLink title="Guestbook" path="/guestbook" openNav={openNav} />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
