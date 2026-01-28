import styles from './style.module.css'
import { useAppSelector } from '../../hooks/hooks'
import CardWithCounter from '../../ui/CardWithCounter/CardWithCounter'
import { selectTotalItems, selectTotalPrice } from '../../features/cart/cartSlice'
import Button from '../../ui/Button/Button'

const CartProducts = () => {
  const cart = useAppSelector(state => state.cart.items)
  const totalItems = useAppSelector(selectTotalItems)
  const totalPrice = useAppSelector(selectTotalPrice)
  return (
    <main className={styles.main}>
      {cart.length > 0 ? 
      <>
        <section className={styles.cardList}>
          {cart.map((product) => (
            <CardWithCounter
                className={styles.card}
                key={product.id} 
                id={product.id}
                thumbnail={product.thumbnail} 
                rating={product.rating} 
                title={product.title} 
                price={product.price}
              />
          ))}
        </section>
        <section>
          <div className={styles.info}>
            <p>Количество товаров: {totalItems}шт.</p>
            <p>Общая цена: {totalPrice}$</p>
            <Button className={styles.button} children={'Оформить'}/>
          </div>
        </section>
      </>
      : <p style={{fontSize: '80px', color: '#DCDCDC', marginInline:'auto'}}>Корзина пуста</p>
      }      
    </main>
  )
}

export default CartProducts
