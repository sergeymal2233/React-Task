import dayjs from 'dayjs'
import { Repository } from '@/models/Repository'
import styles from './RepositoryItem.module.scss'
import Link from '@/components/UI/Link'
import Typography from '../UI/Typography'

type Props = {
  repository: Repository
}

const formatDate = (date: string) => dayjs(date).format('MMMM DD YYYY HH:mm')

const RepositoryItem = ({ repository }: Props) => {
  const { html_url, name, updated_at } = repository

  return (
    <div className={styles.item}>
      <Typography variant='h3' textColor='primary'>
        <Link href={html_url}>{name}</Link>
      </Typography>
      <Typography variant='h6'>{`Edited on ${formatDate(
        updated_at,
      )}`}</Typography>
    </div>
  )
}

export default RepositoryItem
