import { useNavigate } from 'react-router'
import styles from './style.module.css'

interface ICardProps{
  id: number,
  thumbnail: string,
  title: string,
  rating: number,
  price: number
}

const Card = (Props: ICardProps) => {
  const {
    id,
    thumbnail,
    title,
    rating,
    price,
  } = Props

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper} onClick={handleClick}>
        <img src={thumbnail} alt={title} />
      </div>
      <span className={styles.rating}><p>Rating:</p>{rating}</span>
      <p className={styles.title} onClick={handleClick}>{title}</p>
      <p className={styles.price}>{price} $</p>
    </div>
  )
}

export default Card
