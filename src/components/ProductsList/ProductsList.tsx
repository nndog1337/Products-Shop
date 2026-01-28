import styles from './style.module.css'
import { useGetProductsQuery } from '../../features/products/productsApi'
import Card from '../../ui/Card/Card'

const ProductsList = () => {
  const { data:products, error, isLoading } = useGetProductsQuery({
    limit: 12
  })
  return (
    <main className={styles.products}>
      {isLoading ? (<p style={{fontSize: '34px', textAlign:'center', color: '#DCDCDC'}}>Loading</p>) 
      : error ? (<p>Error</p>)
      : 
        (products?.map((product) => (
          <Card
            className={styles.card}
            key={product.id} 
            id={product.id}
            thumbnail={product.thumbnail} 
            rating={product.rating} 
            title={product.title} 
            price={product.price}
          />
        )))
      }
    </main>
  )
}

export default ProductsList
