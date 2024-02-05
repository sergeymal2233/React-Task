import { PropsWithChildren } from 'react'
import styles from './PageSection.module.scss'
import Typography from '@/components/UI/Typography'

type Props = {
  title: string
}

const PageSection = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.section}>
      <Typography className={styles.title} variant='h2'>
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default PageSection