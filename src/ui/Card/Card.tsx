import { useNavigate } from 'react-router'
import styles from './style.module.css'

interface ICardProps{
  className:string
  id: number,
  thumbnail: string,
  title: string,
  rating: number,
  price: number
}

const Card = (Props: ICardProps) => {
  const {
    className,
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
    <div className={`${styles.card} ${className}`}>
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
