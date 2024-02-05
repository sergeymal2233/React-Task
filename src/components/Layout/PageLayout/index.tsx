import { PropsWithChildren } from 'react'
import styles from './PageLayout.module.scss'
import Container from '../Container'
import Header from '@/components/UI/Header'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default PageLayout
