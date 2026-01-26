import { NavLink } from 'react-router'
import styles from './style.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavLink to="/" end>
          <li>
            Главная
          </li>
        </NavLink>
        <NavLink to="catalog" end>
          <li>
            Каталог
          </li>
          </NavLink>
        <NavLink to="search" end>
          <li>
            Поиск
          </li>
          </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
