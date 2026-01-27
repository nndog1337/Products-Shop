import styles from './style.module.css'
import { useGetProductsCategoriesQuery } from '../../features/products/productsApi'
import Button from '../Button/Button'

interface CategoriesProps{
  handleClick?: (category: string) => void;
}

const Categories = (Props:CategoriesProps) => {
  const{
    handleClick
  } = Props
  const {data:categories, error, isLoading } = useGetProductsCategoriesQuery()
  const handleButtonClick = (category: string) => {
    if (handleClick) {
      handleClick(category);
    }
  };
  return (
    <>
      <aside className={styles.aside}>
        {isLoading ? (<p style={{fontSize: '34px', textAlign:'center'}}>Loading...</p>) : error ? (<p>Категорий нет</p>) :
        (<>
          <h2>Категории товаров</h2>
          <div className={styles.categoriesWrapper}>
            {categories?.map((category) => (
              <Button key={category} children={category} className={styles.button} onClick={() => handleButtonClick(category)}/>
            ))}
          </div>
        </>)
        }
      </aside>
    </>
  )
}


export default Categories
