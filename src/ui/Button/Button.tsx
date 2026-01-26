import styles from './style.module.css'

interface IButtonProps{
  className?: string;
  children: React.ReactNode;
}

const Button = (Props:IButtonProps) => {
  const{
    children,
    className
  } = Props

  return (
    <button className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button
