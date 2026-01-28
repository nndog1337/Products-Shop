import { useNavigate } from 'react-router'
import styles from './style.module.css'
import Button from '../Button/Button'
import { useAppDispatch } from '../../hooks/hooks'
import { decrementQuantity, incrementQuantity, removeFromCart, selectQuantity } from '../../features/cart/cartSlice'
import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import type { ICard } from '../../types/types'


const CardWithCounter = (Props: ICard) => {
  const {
    className,
    id,
    thumbnail,
    title,
    rating,
    price,
  } = Props


  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  const quantity = useSelector((state: RootState) => 
    selectQuantity(state, id)
  );

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  }

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  }



  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imgWrapper} onClick={handleClick}>
        <img src={thumbnail} alt={title} />
      </div>
      <span className={styles.rating}><p>Rating:</p>{rating}</span>
      <p className={styles.title} onClick={handleClick}>{title}</p>
      
      <div className={styles.Wrapper}>
        <p className={styles.price}>{price} $</p>
          <div className={styles.countWrapper}>
            <Button 
              children="-" 
              onClick={handleDecrement}
            />
            <span className={styles.count}>{quantity}</span>
            <Button 
              children="+" 
              onClick={handleIncrement}
            />
          </div>
          <Button 
            className={styles.removeButton} 
            children="Удалить" 
            onClick={handleRemoveFromCart}
          />
      </div>
    </div>
  )
}

export default CardWithCounter
