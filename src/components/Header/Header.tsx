import { NavLink } from "react-router"
import Button from "../../ui/Button/Button"
import Logo from "../../ui/Logo/Logo"
import Nav from "../../ui/Nav/Nav"
import styles from './style.module.css'
import { useAppSelector } from "../../hooks/hooks"
import { selectTotalItems } from "../../features/cart/cartSlice"
import imageCart from '/public/icons8-cart-30.png'


const Header = () => {
  const totalItems = useAppSelector(selectTotalItems)
  return (
    <header className={styles.header}>
      <Logo/>
      <Nav/>
      <NavLink to="products/cart" end>
        <Button className={styles.button}>
          <img src={imageCart} alt="" /> 
          <span className={styles.count}>{totalItems}</span>
        </Button>
      </NavLink>
    </header>
  )
}

export default Header
