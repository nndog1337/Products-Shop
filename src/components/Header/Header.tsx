import { NavLink } from "react-router"
import Button from "../../ui/Button/Button"
import Logo from "../../ui/Logo/Logo"
import Nav from "../../ui/Nav/Nav"
import styles from './style.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Nav/>
      <NavLink to="cart" end>
        <Button children={'Корзина'} className={styles.button}/>
      </NavLink>
    </header>
  )
}

export default Header
