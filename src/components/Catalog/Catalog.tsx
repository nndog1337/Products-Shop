import { useEffect, useState } from 'react'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../features/products/productsApi'
import Categories from '../../ui/Categories/Categories'
import styles from './style.module.css'
import type { IProduct } from '../../types/types'
import Card from '../../ui/Card/Card'
import Select from '../../ui/Select/Select'

const Catalog = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('rating-desc');
  const [sortBy, sortOrder] = sortValue.split('-') as [string, 'asc' | 'desc'];
  const { data:allProductsData, isLoading, error } = useGetProductsQuery({ limit: 30, sortBy: sortBy, order: sortOrder }, { skip: !!selectedCategory })
  const { data:productsByCategory, isLoading: isLoadingBYCategory, error: errorByCategory } = useGetProductsByCategoryQuery({ category: selectedCategory, sortBy: sortBy, order: sortOrder },{ skip: !selectedCategory });

  useEffect(() => {
    if (selectedCategory && productsByCategory) {
      setProductsList(productsByCategory);
    } else if (!selectedCategory && allProductsData) {
      setProductsList(allProductsData);
    }
  }, [selectedCategory, allProductsData, productsByCategory, sortValue]);


  const handleClick = (category:string) => {
    setSelectedCategory(category)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  }



  return (
    <main className={styles.main}>
      <Categories handleClick={handleClick}/>
      <section className={styles.section}>
        <Select sortBy={sortValue} handleChange={handleSortChange} />
        {isLoading || isLoadingBYCategory ? (<p style={{fontSize: '34px', marginInline:'auto', color: '#DCDCDC'}}>Loading...</p>) 
          : error||errorByCategory ? (<p>Error</p>) 
          :<>
            <div className={styles.products}>
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
            </div>
          </>
        }
      </section>
    </main>
  )
}

export default Catalog
