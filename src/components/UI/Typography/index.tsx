import classNames from 'classnames'
import styles from './Typography.module.scss'
import { HTMLAttributes, PropsWithChildren, createElement } from 'react'

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'
type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type Colors = 'primary' | 'regular'

type Props = {
  tag?: Tags
  variant?: Variants
  textColor?: Colors
} & HTMLAttributes<HTMLParagraphElement>

export const Typography = ({
  tag = 'p',
  variant = 'body',
  textColor = 'regular',
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return createElement(
    tag,
    {
      className: classNames(
        {
          [styles['h1']]: variant === 'h1',
          [styles['h2']]: variant === 'h2',
          [styles['h3']]: variant === 'h3',
          [styles['h4']]: variant === 'h4',
          [styles['h5']]: variant === 'h5',
          [styles['h6']]: variant === 'h6',
          [styles['body']]: variant === 'body',
          [styles['primary']]: textColor === 'primary',
        },
        className,
      ),
      ...props,
    },
    children,
  )
}

export default Typography
