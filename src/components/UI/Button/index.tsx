import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
