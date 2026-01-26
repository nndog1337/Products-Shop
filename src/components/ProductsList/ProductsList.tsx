import styles from './style.module.css'
import { useGetProductsQuery } from '../../features/products/productsApi'
import Card from '../../ui/Card/Card'

const ProductsList = () => {
  const { data:products, error, isLoading } = useGetProductsQuery(12)
  return (
    <section className={styles.products}>
      {isLoading ? <p style={{fontSize: '34px', textAlign:'center'}}>Loading</p> : error ? <p>Error</p> : 
        (products?.map((product) => (
          <Card 
            key={product.id} 
            id={product.id}
            thumbnail={product.thumbnail} 
            rating={product.rating} 
            title={product.title} 
            price={product.price}>
          </Card>
        )))
      }

    </section>
  )
}

export default ProductsList
