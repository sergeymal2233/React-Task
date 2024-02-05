import { PropsWithChildren } from 'react'
import styles from './PageLayout.module.scss'
import Container from '../Container'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default PageLayout