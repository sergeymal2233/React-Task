import { AnchorHTMLAttributes } from 'react'
import styles from './Link.module.scss'

const Link = ({
  children,
  target = '_blank',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} target={target} {...props}>
      {children}
    </a>
  )
}

export default Link
