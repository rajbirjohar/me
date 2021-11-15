import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ActiveLink from '@/components/ActiveLink'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import styles from '@/styles/header.module.css'
import { SwatchIcon } from '@/components/Icons'

interface Size {
  width: number | undefined
  height: number | undefined
}

const list = {
  closed: {
    opacity: 1,
    height: '0vh',
    transition: {
      duration: 0.0005,
    },
  },
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      duration: 0.0005,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
}

const listItems = {
  closed: {
    opacity: 0,
    x: -15,
  },
  open: {
    opacity: 1,
    x: 0,
  },
}

const NavLink = ({ href, title }) => {
  return (
    <li className={styles.link}>
      <ActiveLink activeClassName="active" href={href}>
        <a className="inactive">{title}</a>
      </ActiveLink>
    </li>
  )
}

const MobileLink = ({ href, title, onClick }) => {
  return (
    <motion.li variants={listItems} className={styles.link}>
      <ActiveLink activeClassName="active" href={href}>
        <a onClick={onClick}>{title}</a>
      </ActiveLink>
    </motion.li>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()
  const size: Size = useWindowSize()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 0)
    })
  }, [])

  const openNav = () => {
    setOpen(!open)
    if (!open) {
      blockScroll()
    } else {
      allowScroll()
    }
  }

  return (
    <>
      {size.width > 668 ? (
        <nav className={styles.nav}>
          <ul className={styles.header}>
            <NavLink href="/" title="Home" />
            <NavLink href="/projects" title="Projects" />
            <NavLink href="/life" title="Life" />
            <NavLink href="/music" title="Music" />
          </ul>
        </nav>
      ) : (
        <nav className={styles.mobilenav}>
          <ul className={styles.header}>
            <div className={styles.hamburger} onClick={openNav}>
              <span
                className={
                  open ? `${styles.inner} ${styles.onclick}` : `${styles.inner}`
                }
              ></span>
              <span
                className={
                  open
                    ? `${styles.inner} ${styles.onclick2}`
                    : `${styles.inner}`
                }
              ></span>
            </div>
            <motion.ul
              animate={open ? 'open' : 'closed'}
              variants={list}
              className={styles.notopen}
            >
              <MobileLink href="/" title="Home" onClick={openNav} />
              <MobileLink href="/projects" title="Projects" onClick={openNav} />
              <MobileLink href="/life" title="Life" onClick={openNav} />
              <MobileLink href="/music" title="Music" onClick={openNav} />
            </motion.ul>
          </ul>
        </nav>
      )}
    </>
  )
}
