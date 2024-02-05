import LanguageItem from '../LanguageItem'
import styles from './LanguageList.module.scss'

type Props = {
  languages: Record<string, number>
}

const LanguageList = ({ languages }: Props) => {
  const arrayOfLanguage = Object.entries(languages)

  return (
    <ul className={styles.list}>
      {arrayOfLanguage.map((lang) => (
        <li key={lang[0]}>
          <LanguageItem name={lang[0]} percentage={lang[1]} />
        </li>
      ))}
    </ul>
  )
}

export default LanguageList
