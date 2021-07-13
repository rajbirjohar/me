import ActiveLink from './ActiveLink'
import styles from '@/styles/header.module.css'
import { Toaster } from 'react-hot-toast'

const Link = ({ href, title }) => {
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className="inactive">{title}</a>
    </ActiveLink>
  )
}

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Toaster />
      <ul className={styles.header}>
        <li className={styles.li}>
          <Link href="/" title="Home" />
          <Link href="/projects" title="Projects" />
          <Link href="/life" title="Life" />
          <Link href="/music" title="Music" />
          <Link href="/guestbook" title="Guestbook" />
        </li>
      </ul>
    </nav>
  )
}
