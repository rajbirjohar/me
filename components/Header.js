import ActiveLink from './ActiveLink'
import styles from '@/styles/header.module.css'

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
      <ul className={styles.header}>
        <li className={styles.li}>
          <Link href="/" title="Home" />
          <Link href="/projects" title="Projects" />
          <Link href="/life" title="Life" />
          <Link href="/music" title="Music" />
          {/* <Link href="/readings" title="Readings" /> */}
        </li>
      </ul>
    </nav>
  )
}
