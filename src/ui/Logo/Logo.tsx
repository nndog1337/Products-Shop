import { NavLink } from 'react-router'
import styles from './style.module.css'

const Logo = () => {
  return (
    <NavLink to="/" end>
      <img className={styles.logo} src="/public/pngtree-grey-logo-mockup-design-shine-background-image_562406.jpg" alt="" />
    </NavLink>
  )
}

export default Logo
