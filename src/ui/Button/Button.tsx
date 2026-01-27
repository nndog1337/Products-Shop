import styles from './style.module.css'

interface IButtonProps{
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (Props:IButtonProps) => {
  const{
    children,
    className,
    onClick
  } = Props

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
