import { useNavigate } from 'react-router'
import styles from './style.module.css'
import Button from '../Button/Button'
import { useAppDispatch } from '../../hooks/hooks'
import { addToCart, removeFromCart, selectQuantity } from '../../features/cart/cartSlice'
import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import type { ICard } from '../../types/types'


const Card = (Props: ICard) => {
  const {
    className,
    id,
    thumbnail,
    title,
    rating,
    price,
  } = Props

  const dispatch = useAppDispatch();


  const handleAddToCart = () => {
    const product = { id, thumbnail, title, rating, price };
    dispatch(addToCart(product));
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  }

  const quantity = useSelector((state: RootState) => 
    selectQuantity(state, id)
  );

  const handleCart = () => {
    quantity > 0 ? handleRemoveFromCart() : handleAddToCart()
  }


  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }




  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imgWrapper} onClick={handleClick}>
        <img src={thumbnail} alt={title} />
      </div>
      <span className={styles.rating}><p>Rating:</p>{rating}</span>
      <p className={styles.title} onClick={handleClick}>{title}</p>
      <p className={styles.price}>{price} $</p>
      <Button children={quantity > 0 ? 'Удалить из корзины' : 'Добавить в корзину'} onClick={handleCart}/>
    </div>
  )
}

export default Card
