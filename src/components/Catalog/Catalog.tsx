import { useEffect, useState } from 'react'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../features/products/productsApi'
import Categories from '../../ui/Categories/Categories'
import styles from './style.module.css'
import type { IProduct } from '../../types/types'
import Card from '../../ui/Card/Card'

const Catalog = () => {
  const[productsList, setProductsList] = useState<IProduct[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const { data:allProductsData, isLoading, error } = useGetProductsQuery({ limit: 30 }, { skip: !!selectedCategory }) 
  const { data:productsByCategory, isLoading: isLoadingBYCategory, error: errorByCategory } = useGetProductsByCategoryQuery({ category: selectedCategory },{ skip: !selectedCategory });

  useEffect(() => {
    if (selectedCategory && productsByCategory) {
      setProductsList(productsByCategory);
    } else if (!selectedCategory && allProductsData) {
      setProductsList(allProductsData);
    }
  }, [selectedCategory, allProductsData, productsByCategory]);


  const handleClick = (category:string) => {
    setSelectedCategory(category)
  }
  return (
    <main className={styles.main}>
      <Categories handleClick={handleClick}/>
      {isLoading || isLoadingBYCategory ? (<p style={{fontSize: '34px', textAlign:'center'}}>Loading</p>) 
      : error||errorByCategory ? (<p>Error</p>) 
      :<section className={styles.products}>
        {productsList?.map((product) => (
          <Card
            className={styles.card}
            key={product.id} 
            id={product.id}
            thumbnail={product.thumbnail} 
            rating={product.rating} 
            title={product.title} 
            price={product.price}
          />
        ))
        }
      </section>}
    </main>
  )
}

export default Catalog
