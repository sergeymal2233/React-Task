import { InputHTMLAttributes } from 'react'
import styles from './TextInput.module.scss'

const TextInput = (
  props: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
) => {
  return <input className={styles.input} type='text' {...props} />
}

export default TextInput
