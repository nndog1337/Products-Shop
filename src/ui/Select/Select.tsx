import styles from './style.module.css'


interface ISelectProps{
  sortBy: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (Props: ISelectProps) => {
  const {
    handleChange,
    sortBy
  } = Props
  return (
    <select className={styles.select} value={sortBy} onChange={handleChange}>
      <option value="rating-desc">Рейтинг по убыванию</option>
      <option value="rating-asc">Рейтинг по возрастанию</option>
      <option value="price-desc">Цена по убыванию</option>
      <option value="price-asc">Цена по возрастанию</option>
      <option value="title-asc">По названию</option>
    </select>
  )
}

export default Select
