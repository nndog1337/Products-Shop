import { useSelector } from 'react-redux'
import { addToCart, selectQuantity } from '../../features/cart/cartSlice'
import { useGetProductQuery } from '../../features/products/productsApi'
import Button from '../../ui/Button/Button'
import Comment from '../../ui/Comment/Comment'
import styles from './style.module.css'
import type { RootState } from '../../store/store'
import { useAppDispatch } from '../../hooks/hooks'

interface ICardDetailsProps{
  cardId: string 
}

const CardDetails = (Props: ICardDetailsProps) => {
  const{
    cardId
  } = Props

  const dispatch = useAppDispatch();

  const quantity = useSelector((state: RootState) =>
    selectQuantity(state, +cardId)
  );

  const priceWithDiscount = () => {
    if(details?.price && details?.discountPercentage){
      const price = +(details?.price)
      const discount = +(details?.discountPercentage)
      return  Math.floor(price * (1 - discount / 100))
    }
  }

  const defaultPrice = () => {
    if(details?.price){
      return Math.ceil(details?.price)
    }
  }

  const {data: details, error, isLoading} = useGetProductQuery(cardId)
  const handleAddToCart = () => {
    if(details){
      const id = details.id
      const thumbnail = details.thumbnail
      const title = details.title
      const rating = details.rating
      const price = details.price
      const product = { id, thumbnail, title, rating, price };
      dispatch(addToCart(product));
    }
  }
  if(isLoading) return <p style={{fontSize: '50px', textAlign: 'center', color: '#DCDCDC'}}>Loading...</p>
  if(error) return <p style={{fontSize: '50px', textAlign: 'center'}}>Error...</p>
  return (
    <main className={styles.section}>
      <section className={styles.cardInfoWrapper}>
        <div className={styles.imgWrapper}>
          <img src={details?.thumbnail} alt="" />
        </div>
        <div className={styles.cardInfo}>
          <p>Категория: {details?.category}</p>
          <h1>{details?.title}</h1>
          <div className={styles.price}>
            <span><s>{defaultPrice()}$</s></span>
            <span>{priceWithDiscount()}$</span>
          </div>
          <Button children={quantity > 0 ? 'В корзине' : 'Добавить в корзину'} onClick={handleAddToCart}/>
        </div>
      </section>
      <section className={styles.itemInfo}>
        <div className={styles.desc}>
          <h2>Описание товара</h2>
          <p>{details?.description}</p>
        </div>
        <div className={styles.comments}>
          <h2>Отзывы о товаре</h2>
          {details?.reviews.map((review) => (
            <Comment key={review.comment} reviewerName={review.reviewerName} comment={review.comment}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CardDetails
