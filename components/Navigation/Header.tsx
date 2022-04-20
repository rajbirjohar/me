import ActiveLink from '@/components/ActiveLink'
import { useWindowSize } from '@/hooks/useWindowSize'
import styles from '@/styles/header.module.css'
import Theme from '../Theme'
import MobileHeader from './MobileHeader'

interface Size {
  width: number | undefined
  height: number | undefined
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

export default function Header() {
  const size: Size = useWindowSize()
  return (
    <>
      {size.width > 668 ? (
        <nav className={styles.nav}>
          <ul className={styles.inner}>
            <Theme />
            <div className={styles.navlist}>
              <NavLink href="/" title="Home" />
              <NavLink href="/projects" title="Projects" />
              <NavLink href="/experiences" title="Experiences" />
              <NavLink href="/music" title="Music" />
              <NavLink href="/guestbook" title="Guestbook" />
            </div>
          </ul>
        </nav>
      ) : (
        <MobileHeader />
      )}
    </>
  )
}
