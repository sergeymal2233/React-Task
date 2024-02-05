import { Repository } from '@/models/Repository'
import RepositoryItem from '@/components/RepositoryItem'
import styles from './RepositoryList.module.scss'

type Props = {
  repositories: Repository[]
}

const RepositoryList = ({ repositories }: Props) => {
  return (
    <div className={styles.list}>
      {repositories.map((repo) => (
        <RepositoryItem key={repo.html_url} repository={repo} />
      ))}
    </div>
  )
}

export default RepositoryList
