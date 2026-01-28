import { useRef, useState, type KeyboardEvent, type Ref } from 'react'
import { useGetProductsBySearchQuery } from '../../features/products/productsApi'
import Button from '../../ui/Button/Button'
import styles from './style.module.css'
import Card from '../../ui/Card/Card'

const Search = () => {
  const [searchValue,setSearchValue] = useState<string>('')
  const {data:products, error, isLoading} = useGetProductsBySearchQuery({query: searchValue},{skip:!searchValue})
  const ref: Ref<HTMLInputElement> = useRef(null)

  const handleClick = () => {
    const trimValue = ref.current?.value.trim()
    if(trimValue && trimValue.length>3){
      setSearchValue(trimValue)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };


  return (
    <main>
      <section className={styles.search}>
        <div className={styles.searchWrapper}>
          <input ref={ref} className={styles.searchInput} id='searchInput' type="text" placeholder='Введите название товара' onKeyDown={handleKeyDown} />
          <Button className={styles.button} children={'Найти'} onClick={handleClick}/>
        </div>
        <div className={styles.productsWrapper}>
            {isLoading ? (<p style={{fontSize: '34px', textAlign:'center', color: '#DCDCDC'}}>Loading</p>) 
            : error ? (<p>Error</p>)
            :  products?.length === 0 
            ? (<p style={{fontSize: '34px', textAlign:'center', marginTop:'20px', color: '#DCDCDC'}}>По вашему запросу ничего не найдено :(</p>)
            : (<>
              {products?.map((product) => (
                  <Card 
                    className={styles.card}
                    key={product.id} 
                    id={product.id}
                    thumbnail={product.thumbnail} 
                    rating={product.rating} 
                    title={product.title} 
                    price={product.price}
                />
              ))}
              </>)
          }
        </div>
      </section>
    </main>
  )
}

export default Search
